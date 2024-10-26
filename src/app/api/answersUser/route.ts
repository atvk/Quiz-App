import { NextRequest, NextResponse } from "next/server";
import { UserAnswersMock } from "@/damains/tests/mocks";

export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json(UserAnswersMock, { status: 200 });
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  return NextResponse.json({ data });
}
