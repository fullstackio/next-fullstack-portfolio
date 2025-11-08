import { NextResponse } from "next/server";
import { getUserList } from "@/lib/controllers/authController";

export async function GET() {
  return getUserList();
}
