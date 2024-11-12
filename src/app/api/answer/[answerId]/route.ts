import { NextResponse } from "next/server";

export type Answer = {
  id: string;
  description: string;
};

let answers: Answer[] = [
  {
    id: "one",
    description: "Cat",
  },
  {
    id: "two",
    description: "Dog",
  },
];

type Params = {
  params: { answerId: string };
};


export async function GET(req: Request, { params: { answerId } }: Params) {
  const found = answers.find((u) => u.id === answerId);

  if (found) {
    return NextResponse.json(found, { status: 200 });
  }

  return new Response("Answer Not found", {
    status: 404,
  });
}


export async function POST(req: Request, { params: { answerId } }: Params) {
  const data = (await req.json()) as Partial<Answer>;
  let updated = false;

  answers = answers.map((u) => {
    if (u.id === answerId) {
      updated = true;
      return {
        ...u,
        ...data,
      };
    }
    return u;
  });

  const answer = answers.find((u) => u.id === answerId);

  return NextResponse.json(answer, { status: 200 });
}
