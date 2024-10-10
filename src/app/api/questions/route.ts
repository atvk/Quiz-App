import { NextRequest, NextResponse } from "next/server";
import { QuestionsMock }from "@/damains/tests/mocks";

export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json(QuestionsMock, { status: 200 });
}