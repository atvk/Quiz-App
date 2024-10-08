type TestId = string;
type QuestionId = string;

export type Test = {
  id: TestId;
  name: string;
  questionIds: QuestionId[];
  timeLimit: number | null;
};
