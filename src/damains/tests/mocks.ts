import { Key, ReactPortal, AwaitedReactNode, ReactElement, JSXElementConstructor, ReactNode, JSX } from "react";
import type { Test } from "./types";

export const TestsMock: Test[] = [
  {
    id: "1",
    name: "Биологии",
    questionIds: ["QUESTION_ONE", "QUESTION_TWO", "QUESTION_THREE"],
    timeLimit: 10,
    map: function (_arg0: (test: { id: Key | null | undefined; name: string | number | bigint | boolean | ReactPortal | Promise<AwaitedReactNode> | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined; }) => JSX.Element): ReactNode {
      throw new Error("Function not implemented.");
    }
  },
  {
    id: "2",
    name: "Географии",
    questionIds: ["QUESTION_FOUR", "QUESTION_FIVE", "QUESTION_SIX"],
    timeLimit: 15,
    map: function (_arg0: (test: { id: Key | null | undefined; name: string | number | bigint | boolean | ReactPortal | Promise<AwaitedReactNode> | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined; }) => JSX.Element): ReactNode {
      throw new Error("Function not implemented.");
    }
  },
  {
    id: "3",
    name: "Истории",
    questionIds: ["QUESTION_SEVEN", "QUESTION_EIGHT", "QUESTION_NINE"],
    timeLimit: 20,
    map: function (_arg0: (test: { id: Key | null | undefined; name: string | number | bigint | boolean | ReactPortal | Promise<AwaitedReactNode> | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined; }) => JSX.Element): ReactNode {
      throw new Error("Function not implemented.");
    }
  },
  {
    id: "4",
    name: "Математики",
    questionIds: ["QUESTION_TEN", "QUESTION_ELEVEN", "QUESTION_TWELVE"],
    timeLimit: 40,
    map: function (_arg0: (test: { id: Key | null | undefined; name: string | number | bigint | boolean | ReactPortal | Promise<AwaitedReactNode> | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined; }) => JSX.Element): ReactNode {
      throw new Error("Function not implemented.");
    }
  },
];

