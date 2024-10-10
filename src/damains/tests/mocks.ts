import { Key, ReactPortal, AwaitedReactNode, ReactElement, JSXElementConstructor, ReactNode, JSX } from "react";
import type { Test } from "./types";
import type { Questions } from "./types";

export const TestsMock: Test[] = [
  {
    id: "BIOLOGY_TEST",
    name: "Биологии",
    questionIds: ["QUESTION_ONE", "QUESTION_TWO", "QUESTION_THREE"],
    timeLimit: 10,
    map: function (_arg0: (test: { id: Key | null | undefined; name: string | number | bigint | boolean | ReactPortal | Promise<AwaitedReactNode> | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined; }) => JSX.Element): ReactNode {
      throw new Error("Function not implemented.");
    }
  },
  {
    id: "GEOGRAPHY_TEST",
    name: "Географии",
    questionIds: ["QUESTION_FOUR", "QUESTION_FIVE", "QUESTION_SIX"],
    timeLimit: 15,
    map: function (_arg0: (test: { id: Key | null | undefined; name: string | number | bigint | boolean | ReactPortal | Promise<AwaitedReactNode> | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined; }) => JSX.Element): ReactNode {
      throw new Error("Function not implemented.");
    }
  },
  {
    id: "HISTORY_TEST",
    name: "Истории",
    questionIds: ["QUESTION_SEVEN", "QUESTION_EIGHT", "QUESTION_NINE"],
    timeLimit: 20,
    map: function (_arg0: (test: { id: Key | null | undefined; name: string | number | bigint | boolean | ReactPortal | Promise<AwaitedReactNode> | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined; }) => JSX.Element): ReactNode {
      throw new Error("Function not implemented.");
    }
  },
  {
    id: "MATHEMATICS_TEST",
    name: "Математики",
    questionIds: ["QUESTION_TEN", "QUESTION_ELEVEN", "QUESTION_TWELVE"],
    timeLimit: 40,
    map: function (_arg0: (test: { id: Key | null | undefined; name: string | number | bigint | boolean | ReactPortal | Promise<AwaitedReactNode> | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined; }) => JSX.Element): ReactNode {
      throw new Error("Function not implemented.");
    }
  },
];

export const QuestionsMock: Questions[] = [{
  id: "QUESTION_ONE",
  description: 'Дельфин, относиться к роду?',
  type: 'ONE_CORRECT_ANSWER',
  options: [{
    id: '1',
    description: 'Млекопитающие',
  }, {
    id: '2',
    description: 'Земноводные',
  }, {
    id: '3',
    description: 'Рыбы',
  }]
}, {
  id: "QUESTION_TWO",
  description: 'У какой обезьяны нет хвоста?',
  type: 'MANY_CORRECT_ANSWERS',
  options: [{
    id: '1',
    description: 'Горилла',
  }, {
    id: '2',
    description: 'Шимпанзе',
  }, {
    id: '3',
    description: 'Мартышка',
  }]
}, {
  id: "QUESTION_THREE",
  description: 'У какого млекопитающего самая продолжительная беременность?',
  type: 'ANSWER_SHORT_TEXT',
}, {
  id: "QUESTION_FOUR",
  description: 'На територии каких стран находится Эверест?',
  type: 'ANSWER_LONG_TEXT'
}, {
  id: "QUESTION_FIVE",
  description: 'Лондон, столица какой страны?',
  type: 'ANSWER_SHORT_TEXT'
},{
  id: "QUESTION_SIX",
  description: 'В какой области находится Санкт-Петербург?',
  type: 'ONE_CORRECT_ANSWER',
  options: [{
    id: '1',
    description: 'В Санкт-Петербургкской области',
  }, {
    id: '2',
    description: 'В Северо-Заподной области',
  }, {
    id: '3',
    description: 'В Ленинградской области',
  }]
},{
  id: "QUESTION_SEVEN",
  description: 'Год крещения Руси?',
  type: 'ONE_CORRECT_ANSWER',
  options: [{
    id: '1',
    description: '988',
  }, {
    id: '2',
    description: '911',
  }, {
    id: '3',
    description: '998',
  }]
}, {
  id: "QUESTION_EIGHT",
  description: 'Фамилия последнего имератора России?',
  type: 'ANSWER_SHORT_TEXT'
},{
  id: "QUESTION_NINE",
  description: 'Причины Первой мировой войны?',
  type: 'MANY_CORRECT_ANSWERS',
  options: [{
    id: '1',
    description: 'Колониальная политика империалистических держав',
  }, {
    id: '2',
    description: 'Столкновения интересов на морских мировых путях',
  }, {
    id: '3',
    description: 'Кризис перепроизводство в Соединенных Штатах Америки',
  }]
},
{
  id: "QUESTION_TEN",
  description: 'Как можно получить число 16?',
  type: 'MANY_CORRECT_ANSWERS',
  options: [{
    id: '1',
    description: 'Взять квадратный корень из 256',
  }, {
    id: '2',
    description: 'Сложить два и четырнадцать',
  }, {
    id: '3',
    description: 'Взять кубический корень из 4098 и вычесть два',
  }]
}, {
  id: "QUESTION_ELEVEN",
  description: 'Почему математикам не дают Нобеливскую премию?',
  type: 'ANSWER_LONG_TEXT'
}, {
  id: "QUESTION_TWELVE",
  description: 'Кто из российских математиков доказал гипотезу Пуанкаре?',
  type: 'ANSWER_SHORT_TEXT'
}

]