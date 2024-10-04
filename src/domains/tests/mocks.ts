import type { Test } from "./types";

export const TestsMock: Test[] = [
  {
    id: "1",
    name: "Биологии",
    questionIds: ["QUESTION_ONE", "QUESTION_TWO", "QUESTION_THREE"],
    timeLimit: 10,
  },
  {
    id: "2",
    name: "Географии",
    questionIds: ["QUESTION_FOUR", "QUESTION_FIVE", "QUESTION_SIX"],
    timeLimit: 15,
  },
  {
    id: "3",
    name: "Истории",
    questionIds: ["QUESTION_SEVEN", "QUESTION_EIGHT", "QUESTION_NINE"],
    timeLimit: 20,
  },
  {
    id: "4",
    name: "Математики",
    questionIds: ["QUESTION_TEN", "QUESTION_ELEVEN", "QUESTION_TWELVE"],
    timeLimit: 40,
  },
];
