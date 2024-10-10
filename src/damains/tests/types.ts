type TestId = string;
type QuestionId = string;

export type Test = {
  map(arg0: (test: { id: import("react").Key | null | undefined; name: string | number | bigint | boolean | import("react").ReactPortal | Promise<import("react").AwaitedReactNode> | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | Iterable<import("react").ReactNode> | null | undefined; }) => import("react").JSX.Element): import("react").ReactNode;
  id: TestId;
  name: string;
  questionIds: QuestionId[];
  timeLimit: number | null;
};
