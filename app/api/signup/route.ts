import { NextRequest, NextResponse } from "next/server";
import { signupController } from "@/lib/controllers/authController";

export async function POST(req: NextRequest) {
  return signupController(req);
}
