import { TestsMock } from "@/damains/tests/mocks";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, context: any) {
  const { params } = context;

  return NextResponse.json(
    TestsMock.find((t: any) => t.id.toString() === params.id.toString())
  );
}
