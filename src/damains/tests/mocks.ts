import {
  Key,
  ReactPortal,
  AwaitedReactNode,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  JSX,
} from "react";
import type { Test } from "./types";
import type { Questions } from "./types";
import type { QuestionAnswer } from "./types";

export const TestsMock: Test[] = [
  {
    id: "ZOOLOGY_TEST",
    name: "Зоологии",
    questionIds: ["QUESTION_ONE", "QUESTION_TWO", "QUESTION_THREE"],
    timeLimit: 5,
    map: function (
      _arg0: (test: {
        id: Key | null | undefined;
        name:
          | string
          | number
          | bigint
          | boolean
          | ReactPortal
          | Promise<AwaitedReactNode>
          | ReactElement<any, string | JSXElementConstructor<any>>
          | Iterable<ReactNode>
          | null
          | undefined;
      }) => JSX.Element
    ): ReactNode {
      throw new Error("Function not implemented.");
    },
  },
  {
    id: "GEOGRAPHY_TEST",
    name: "Географии",
    questionIds: ["QUESTION_FOUR", "QUESTION_FIVE", "QUESTION_SIX"],
    timeLimit: 5,
    map: function (
      _arg0: (test: {
        id: Key | null | undefined;
        name:
          | string
          | number
          | bigint
          | boolean
          | ReactPortal
          | Promise<AwaitedReactNode>
          | ReactElement<any, string | JSXElementConstructor<any>>
          | Iterable<ReactNode>
          | null
          | undefined;
      }) => JSX.Element
    ): ReactNode {
      throw new Error("Function not implemented.");
    },
  },
  {
    id: "HISTORY_TEST",
    name: "Истории",
    questionIds: ["QUESTION_SEVEN", "QUESTION_EIGHT", "QUESTION_NINE"],
    timeLimit: 5,
    map: function (
      _arg0: (test: {
        id: Key | null | undefined;
        name:
          | string
          | number
          | bigint
          | boolean
          | ReactPortal
          | Promise<AwaitedReactNode>
          | ReactElement<any, string | JSXElementConstructor<any>>
          | Iterable<ReactNode>
          | null
          | undefined;
      }) => JSX.Element
    ): ReactNode {
      throw new Error("Function not implemented.");
    },
  },
  {
    id: "MATHEMATICS_TEST",
    name: "Математики",
    questionIds: ["QUESTION_TEN", "QUESTION_ELEVEN", "QUESTION_TWELVE"],
    timeLimit: 5,
    map: function (
      _arg0: (test: {
        id: Key | null | undefined;
        name:
          | string
          | number
          | bigint
          | boolean
          | ReactPortal
          | Promise<AwaitedReactNode>
          | ReactElement<any, string | JSXElementConstructor<any>>
          | Iterable<ReactNode>
          | null
          | undefined;
      }) => JSX.Element
    ): ReactNode {
      throw new Error("Function not implemented.");
    },
  },
];

export const QuestionsMock: Questions[] = [
  {
    id: "QUESTION_ONE",
    description: "Дельфин, относиться к роду?",
    type: "ONE_CORRECT_ANSWER",
    options: [
      {
        id: "1",
        description: "Млекопитающие",
        checked: false,
        questionId: "",
      },
      {
        id: "2",
        description: "Земноводные",
        checked: false,
        questionId: "",
      },
      {
        id: "3",
        description: "Рыбы",
        checked: false,
        questionId: "",
      },
    ],
  },
  {
    id: "QUESTION_TWO",
    description: "У каких обезьян нет хвоста?",
    type: "MANY_CORRECT_ANSWERS",
    options: [
      {
        id: "1",
        description: "Горилла",
        checked: false,
        questionId: "",
      },
      {
        id: "2",
        description: "Шимпанзе",
        checked: false,
        questionId: "",
      },
      {
        id: "3",
        description: "Мартышка",
        checked: false,
        questionId: "",
      },
    ],
  },
  {
    id: "QUESTION_THREE",
    description: "У какого млекопитающего самая продолжительная беременность?",
    type: "ANSWER_SHORT_TEXT",
  },
  {
    id: "QUESTION_FOUR",
    description: "На территории каких стран находится Эверест?",
    type: "ANSWER_LONG_TEXT",
  },
  {
    id: "QUESTION_FIVE",
    description: "Лондон, столица какой страны?",
    type: "ANSWER_SHORT_TEXT",
  },
  {
    id: "QUESTION_SIX",
    description: "В какой области находится Санкт-Петербург?",
    type: "ONE_CORRECT_ANSWER",
    options: [
      {
        id: "1",
        description: "В Санкт-Петербургкской области",
        checked: false,
        questionId: "",
      },
      {
        id: "2",
        description: "В Северо-Западной области",
        checked: false,
        questionId: "",
      },
      {
        id: "3",
        description: "В Ленинградской области",
        checked: false,
        questionId: "",
      },
    ],
  },
  {
    id: "QUESTION_SEVEN",
    description: "Фамилия последнего имератора России?",
    type: "ANSWER_SHORT_TEXT",
  },
  {
    id: "QUESTION_EIGHT",
    description: "Год крещения Руси?",
    type: "ONE_CORRECT_ANSWER",
    options: [
      {
        id: "1",
        description: "988",
        checked: false,
        questionId: "",
      },
      {
        id: "2",
        description: "911",
        checked: false,
        questionId: "",
      },
      {
        id: "3",
        description: "998",
        checked: false,
        questionId: "",
      },
    ],
  },
  {
    id: "QUESTION_NINE",
    description: "Причины Первой мировой войны?",
    type: "MANY_CORRECT_ANSWERS",
    options: [
      {
        id: "1",
        description: "Колониальная политика империалистических держав",
        checked: false,
        questionId: "",
      },
      {
        id: "2",
        description: "Столкновения интересов на морских мировых путях",
        checked: false,
        questionId: "",
      },
      {
        id: "3",
        description: "Кризис перепроизводство в Соединенных Штатах Америки",
        checked: false,
        questionId: "",
      },
    ],
  },
  {
    id: "QUESTION_TEN",
    description: "Как можно получить число 16?",
    type: "MANY_CORRECT_ANSWERS",
    options: [
      {
        id: "1",
        description: "Взять квадратный корень из 256",
        checked: false,
        questionId: "",
      },
      {
        id: "2",
        description: "Сложить два и четырнадцать",
        checked: false,
        questionId: "",
      },
      {
        id: "3",
        description: "Взять кубический корень из 4098 и вычесть два",
        checked: false,
        questionId: "",
      },
    ],
  },
  {
    id: "QUESTION_ELEVEN",
    description: "Почему математикам не дают Нобеливскую премию?",
    type: "ANSWER_LONG_TEXT",
  },
  {
    id: "QUESTION_TWELVE",
    description: "Фамилия математика, который доказал гипотезу Пуанкаре?",
    type: "ANSWER_SHORT_TEXT",
  },
];

export const UserAnswersMock = [{}];

export const RightAnswersMock = [
  {
    questionId: "QUESTION_ONE",
    questionType: "ONE_CORRECT_ANSWER",
    answer: [{ id: "1", description: "Млекопитающие" }],
  },
  {
    questionId: "QUESTION_TWO",
    questionType: "MANY_CORRECT_ANSWERS",
    answer: [
      { id: "1", description: "Горилла" },
      { id: "2", description: "Шимпанзе" },
    ],
  },
  {
    questionId: "QUESTION_THREE",
    questionType: "ANSWER_SHORT_TEXT",
    answer: "Слон",
  },
  {
    questionId: "QUESTION_FOUR",
    questionType: "ANSWER_LONG_TEXT",
    answer: "Китай и Непал",
  },
  {
    questionId: "QUESTION_FIVE",
    questionType: "ANSWER_SHORT_TEXT",
    answer: "Великобритания",
  },
  {
    questionId: "QUESTION_SIX",
    questionType: "ONE_CORRECT_ANSWER",
    answer: [{ id: "3", description: "В Ленинградской области" }],
  },
  {
    questionId: "QUESTION_SEVEN",
    questionType: "ANSWER_SHORT_TEXT",
    answer: "Романов",
  },
  {
    questionId: "QUESTION_EIGHT",
    questionType: "ONE_CORRECT_ANSWER",
    answer: [{ id: "1", description: "988" }],
  },
  {
    questionId: "QUESTION_NINE",
    questionType: "MANY_CORRECT_ANSWERS",
    answer: [
      {
        id: "1",
        description: "Колониальная политика империалистических держав",
      },
      {
        id: "2",
        description: "Столкновения интересов на морских мировых путях",
      },
    ],
  },
  {
    questionId: "QUESTION_TEN",
    questionType: "MANY_CORRECT_ANSWERS",
    answer: [
      {
        id: "1",
        description: "Взять квадратный корень из 256",
      },
      {
        id: "2",
        description: "Сложить два и четырнадцать",
      },
    ],
  },
  {
    questionId: "QUESTION_ELEVEN",
    questionType: "ANSWER_LONG_TEXT",
    answer:
      "Нобель считал, что премия должна присуждаться в тех отраслях науки, которая приносит практическую пользу. Математику он считал наукой абстрактной.",
  },
  {
    questionId: "QUESTION_TWELVE",
    questionType: "ANSWER_SHORT_TEXT",
    answer: "Перельман",
  },
];
