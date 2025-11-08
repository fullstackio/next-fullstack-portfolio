import mongoose, { Model, Document } from "mongoose";
import { AccountRole, AccountStatus, AccountType } from "../types/user";

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  userGender?: string;
  country?: string;
  state?: string;
  city?: string;
  zipCode?: string;
  addressLine?: string;
  birthDate?: string;
  birthMonth?: string;
  birthYear?: string;
  role: AccountRole;
  status: AccountStatus;
  slugInfo: string;
  timeZone: string;
  accountType: AccountType;
  deviceInfo: object;
  otp?: number;
  otpExpires?: string;
  phone?: string;
  isActive: boolean;
  isDeleted: boolean;
  username: string;
  userId?: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    firstName: {
      type: String,
      required: false,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    userGender: {
      type: String,
      enum: ["male", "female", "other"],
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    country: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    zipCode: {
      type: String,
      required: true,
    },
    addressLine: {
      type: String,
      required: true,
    },
    birthDate: {
      type: String,
      required: true,
    },
    birthMonth: {
      type: String,
      required: true,
    },
    birthYear: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
    },
    userId: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    username: {
      type: String,
      unique: true,
      trim: true,
      required: false,
    },
    role: {
      type: String,
      enum: AccountRole,
      default: AccountRole.USER,
    },
    phone: {
      type: Number,
      trim: true,
      required: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    deviceInfo: {
      type: Object,
      required: false,
    },
    status: {
      type: String,
      enum: AccountStatus,
      default: AccountStatus.PENDING,
    },
    accountType: {
      type: String,
      enum: AccountType,
      default: AccountType.FREE,
    },
    slugInfo: {
      type: String,
      required: false,
    },
    timeZone: {
      type: String,
      required: false,
    },
    otp: {
      type: Number,
      default: null,
    },
    otpExpires: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

let UserModel: Model<IUser>;
try {
  UserModel =
    (mongoose.models.User as Model<IUser>) ||
    mongoose.model<IUser>("User", userSchema);
} catch (err) {
  console.error("Error creating UserModel:", err);
  throw err;
}
export { UserModel };

// DB connection logic moved to dbConnection.ts
