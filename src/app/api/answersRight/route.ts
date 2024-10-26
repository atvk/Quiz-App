import { NextRequest, NextResponse } from "next/server";
import {  RightAnswersMock }from "@/damains/tests/mocks";

export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json(RightAnswersMock , { status: 200 });
}
