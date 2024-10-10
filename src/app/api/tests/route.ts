import { NextRequest, NextResponse } from "next/server";
import { TestsMock }from "@/damains/tests/mocks";

export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json(TestsMock, { status: 200 });
}

export async function POST(req: NextRequest) {
  const data = await req.json()
  return NextResponse.json({data})
}
