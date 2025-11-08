import { NextRequest, NextResponse } from "next/server";
import { userSignupSchema } from "../validationSchemas/userSchema";
import { User } from "../types/user";
import bcrypt from "bcryptjs";
import { UserModel } from "../schemas/userModel";
import { connectDB } from "../config/backendConnect/dbConnection";
import {
  generateOtp,
  generateSlug,
  generateUniqueUserId,
  generateUserId,
  getDeviceInfo,
} from "../helperFunction/auth.helper";

export async function signupController(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = userSignupSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { errors: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }
    await connectDB();
    const {
      firstName,
      lastName,
      userGender,
      phone,
      email,
      password,
      country,
      state,
      city,
      zipCode,
      addressLine,
      birthDate,
      birthMonth,
      birthYear,
    } = parsed.data;
    // Generate username and userId if not provided
    const username = generateUserId(firstName, lastName);
    const userId = generateUniqueUserId();
    const otp = generateOtp();
    const otpExpires = Date.now() + 5 * 60 * 1000; // 5 minutes
    const slug = generateSlug(firstName, lastName);
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const deviceInfo = getDeviceInfo(req);

    const existing = await UserModel.findOne({ email });
    if (existing) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 409 }
      );
    }
    if (phone) {
      const phoneExists = await UserModel.findOne({ phone });
      if (phoneExists) {
        return NextResponse.json(
          { error: "Phone number already registered" },
          { status: 409 }
        );
      }
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const userDoc = await UserModel.create({
      firstName,
      lastName,
      userGender,
      phone,
      email,
      password: hashedPassword,
      username,
      userId,
      country,
      state,
      city,
      zipCode,
      addressLine,
      birthDate,
      birthMonth,
      birthYear,
      otp,
      otpExpires,
      slugInfo: slug,
      timeZone: timezone,
      deviceInfo,
    });
    // Only return plain user fields, not the full Mongoose document
    const user: User = {
      firstName: userDoc.firstName,
      lastName: userDoc.lastName,
      userGender: userDoc.userGender,
      email: userDoc.email,
      password: userDoc.password,
      phone: userDoc.phone,
      role: userDoc.role,
      status: userDoc.status,
      slugInfo: userDoc.slugInfo || "",
      timeZone: userDoc.timeZone,
      accountType: userDoc.accountType,
      deviceInfo: userDoc.deviceInfo,
      otp: userDoc.otp,
      otpExpires: userDoc.otpExpires,
      isActive: userDoc.isActive,
      isDeleted: userDoc.isDeleted,
      username: userDoc.username,
      userId: userDoc.userId,
      country: userDoc.country,
      state: userDoc.state,
      city: userDoc.city,
      zipCode: userDoc.zipCode,
      addressLine: userDoc.addressLine,
      birthDate: userDoc.birthDate,
      birthMonth: userDoc.birthMonth,
      birthYear: userDoc.birthYear,
      createdAt: userDoc.createdAt,
      updatedAt: userDoc.updatedAt,
    };
    return NextResponse.json(
      {
        message: "User registered successfully",
        user,
      },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        error: "Server error",
        details: err instanceof Error ? err.message : err,
      },
      { status: 500 }
    );
  }
}

export async function getUserList() {
  try {
    await connectDB();
    // Return only non-deleted users and exclude password from the returned users
    const users = await UserModel.find({ isDeleted: false })
      .sort({ createdAt: -1 })
      .lean();
    return NextResponse.json(
      {
        data: {
          message: "User list fetched successfully",
          status: 200,
          count: users.length,
          users,
        },
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        data: {
          message: "Failed to fetch user list",
          status: 500,
          count: 0,
          users: [],
        },
        error: err instanceof Error ? err.message : err,
      },
      { status: 500 }
    );
  }
}
