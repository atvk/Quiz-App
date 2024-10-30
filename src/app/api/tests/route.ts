import { NextRequest, NextResponse } from "next/server";
import { TestsMock }from "@/damains/tests/mocks";

export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json(TestsMock, { status: 200 });
}

