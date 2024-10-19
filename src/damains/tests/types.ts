type TestId = string;

export type Test = {
  map(
    _arg0: (test: {
      id: import("react").Key | null | undefined;
      name:
        | string
        | number
        | bigint
        | boolean
        | import("react").ReactPortal
        | Promise<import("react").AwaitedReactNode>
        | import("react").ReactElement<
            any,
            string | import("react").JSXElementConstructor<any>
          >
        | Iterable<import("react").ReactNode>
        | null
        | undefined;
    }) => import("react").JSX.Element
  ): import("react").ReactNode;
  id: TestId;
  name: string;
  questionIds: QuestionId[];
  timeLimit: number;
};

export type QuestionId = string;

type QuestionType =
  | "ONE_CORRECT_ANSWER"
  | "MANY_CORRECT_ANSWERS"
  | "ANSWER_SHORT_TEXT"
  | "ANSWER_LONG_TEXT";

export type Questions =
  | {
      id: QuestionId;
      description: string;
      type: Extract<
        QuestionType,
        "ONE_CORRECT_ANSWER" | "MANY_CORRECT_ANSWERS"
      >;
      options: Answer_options[];
    }
  | {
      id: QuestionId;
      description: string;
      type: Extract<QuestionType, "ANSWER_SHORT_TEXT" | "ANSWER_LONG_TEXT">;
    };

type Answer_options_Id = string;

interface Answer_options {
  id: Answer_options_Id;
  description: string;
}

export type QuestionAnswer =
  {
      questionId: QuestionId;
      questionType: Extract<QuestionType, "ONE_CORRECT_ANSWER" | "MANY_CORRECT_ANSWERS">;
      answer: Answer_options[];
    }
  | {
      questionId: QuestionId;
      questionType: Extract<QuestionType, "ANSWER_SHORT_TEXT" | "ANSWER_LONG_TEXT">;
      answer: string;
    };
