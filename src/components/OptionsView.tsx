'use client'
import type { Questions, Test, QuestionsAnswer } from "@/damains/tests/types"
import { useState } from "react"

interface QuestionsViewProps {
  question: Questions
  test: Test
  currentQuestionIdIndex: number
  setCurrentQuestionIdIndex: (currentIndex: number) => void

}

export default function OptionsView({ test, question, currentQuestionIdIndex, setCurrentQuestionIdIndex }: QuestionsViewProps) {

  const [Answers, setAnswers] = useState<QuestionsAnswer | any>([]);
  const [checkedState, setCheckedState] = useState<boolean[]>(new Array(test.questionIds.length).fill(false));
  const [text, setText] = useState('');
  const [finAns, setFinAns] = useState<any[]>([]);

  function handleAnswerChange(position: number, event: any) {
    if (question.type === "ONE_CORRECT_ANSWER" || question.type === "MANY_CORRECT_ANSWERS") {
      const updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item
      )
      setCheckedState(updatedCheckedState)

      const currentUserAnswers: any = updatedCheckedState.reduce(
        (answer: any, currentState: boolean, index: number) => {
          if (currentState === true) {
            return [...answer, {
              questionId: question.id,
              questionType: question.type,
              answers: [{
                id: question.options[index].id,
                answer: question.options[index].description,
              }]
            }]
          }
          return answer;
        },
        []
      );

      const unionAnswer: any = currentUserAnswers.reduce((obj: any, item: any) => {
        obj[item.id] ? obj[item.id].answers.push(...item.answers) :
          (obj[item.id] = { ...item });
        return obj;
      }, {});
      const mergedUserAnswerArray = Object.values(unionAnswer)
      setAnswers(mergedUserAnswerArray)

    }

    if (question.type === "ANSWER_SHORT_TEXT" || question.type === "ANSWER_LONG_TEXT") {
      setText(event.target.value)
      setAnswers([{
        questionId: question.id,
        questionType: question.type,
        answers: event.target.value
      }])
    }
  }
  const next = (event: any) => {
    if (currentQuestionIdIndex < test.questionIds.length) {
      if (question.type === "ONE_CORRECT_ANSWER" || question.type === "MANY_CORRECT_ANSWERS") {

        setCheckedState(new Array(test.questionIds.length).fill(false))
        setCurrentQuestionIdIndex(currentQuestionIdIndex + 1)
        setFinAns([...finAns, Answers[0]])
      }

      if (question.type === "ANSWER_SHORT_TEXT" || question.type === "ANSWER_LONG_TEXT") {

        setText(event.target.value)
        setCurrentQuestionIdIndex(currentQuestionIdIndex + 1)
        setFinAns([...finAns, Answers[0]])

      }
    }
  }

  return (
    <div className="grid grid-cols-1 m-5 border border-indigo-600 text-gray-600 rounded-xl">
      <span className="flex justify-start mx-10 px-5 items-center text-gray-600 mt-10 uppercase font-bold">
        {currentQuestionIdIndex + 1}. {question.description}
      </span>
      {(() => {
        switch (question.type) {
          case "ONE_CORRECT_ANSWER":
            return <div className="grid mt-5 px-5">
              {question.options.map(({ id, description }, index) => {
                return (
                  <div
                    key={index}
                    className="flex gap-5 justify-start mx-10 items-center py-3">
                    <input
                      type="checkbox"
                      onChange={() => { handleAnswerChange((index), event) }}
                      checked={checkedState[index]}
                      id={id}
                      value={description}
                      className="h-5 w-5 border border-indigo-600 text-indigo-600 
                      focus:ring-indigo-600 accent-indigo-600"
                    />
                    <label htmlFor={id}>{description}</label>
                  </div>
                )
              })}
              {
                checkedState.find((item) => item !== false) ?
                  <button
                    onClick={next}
                    className="flex justify-center m-10 items-center uppercase cursor-pointer
p-2 text-indigo-600 border border-indigo-600 rounded-xl transition ease-in-out 
delay-150 bg-white hover:-translate-y-1 hover:scale-110
hover:bg-indigo-200 duration-300"
                  >Ответить
                  </button>
                  :
                  <button
                    className="flex justify-center m-10 items-center uppercase cursor-pointer
                 p-2 text-gray-600 border border-gray--600 rounded-xl transition ease-in-out 
                 delay-150 bg-white hover:-translate-y-1 hover:scale-110
                  hover:bg-gray-200 duration-300"
                  >Ответить
                  </button>
              }
            </div>
          case "MANY_CORRECT_ANSWERS":
            return <div className="grid mt-5 px-5">
              {question.options.map(({ id, description }, index) => {
                return (
                  <div
                    key={index}
                    className="flex gap-5 justify-start mx-10 items-center py-3">
                    <input
                      type="checkbox"
                      onChange={() => { handleAnswerChange(index, event) }}
                      checked={checkedState[index]}
                      id={id}
                      value={description}
                      className="h-5 w-5 border border-indigo-600 text-indigo-600 
                      focus:ring-indigo-600 accent-indigo-600"
                    />
                    <label htmlFor={id}>{description}</label>
                  </div>
                )
              })}
              {
                checkedState.find((item) => item !== false) ?
                  <button
                    onClick={next}
                    className="flex justify-center m-10 items-center uppercase cursor-pointer
p-2 text-indigo-600 border border-indigo-600 rounded-xl transition ease-in-out 
delay-150 bg-white hover:-translate-y-1 hover:scale-110
hover:bg-indigo-200 duration-300"
                  >Ответить
                  </button>
                  :
                  <button
                    className="flex justify-center m-10 items-center uppercase cursor-pointer
                 p-2 text-gray-600 border border-gray--600 rounded-xl transition ease-in-out 
                 delay-150 bg-white hover:-translate-y-1 hover:scale-110
                  hover:bg-gray-200 duration-300"
                  >Ответить
                  </button>
              }
            </div>
          case "ANSWER_SHORT_TEXT":
            return (
              <div className="grid mt-5 px-5">
                <input
                  type='text'
                  value={text}
                  onChange={() => { handleAnswerChange(0, event) }}
                  placeholder="Дай короткий ответ"
                  className="flex justify-start items-center mx-10 p-2 text-sm bg-white 
                  border border-indigo-600 rounded-xl text-gray-600"
                />
                {
                  text !== '' ?
                    <button
                      onClick={next}
                      className="flex justify-center m-10 items-center uppercase cursor-pointer
p-2 text-indigo-600 border border-indigo-600 rounded-xl transition ease-in-out 
delay-150 bg-white hover:-translate-y-1 hover:scale-110
hover:bg-indigo-200 duration-300"
                    >Ответить
                    </button>
                    :
                    <button
                      className="flex justify-center m-10 items-center uppercase cursor-pointer
                 p-2 text-gray-600 border border-gray--600 rounded-xl transition ease-in-out 
                 delay-150 bg-white hover:-translate-y-1 hover:scale-110
                  hover:bg-gray-200 duration-300"
                    >Ответить
                    </button>
                }
              </div >
            )
          case "ANSWER_LONG_TEXT":
            return (
              <div className="grid mt-5 px-5">
                <textarea
                  value={text}
                  onChange={() => { handleAnswerChange(0, event) }}
                  className="flex justify-start items-center mx-10 p-2 text-sm bg-white 
                  border border-indigo-600 rounded-xl text-gray-600"
                  placeholder="Дай развернутый ответ"
                />
                {
                  text !== '' ?
                    <button
                      onClick={next}
                      className="flex justify-center m-10 items-center uppercase cursor-pointer
p-2 text-indigo-600 border border-indigo-600 rounded-xl transition ease-in-out 
delay-150 bg-white hover:-translate-y-1 hover:scale-110
hover:bg-indigo-200 duration-300"
                    >Ответить
                    </button>
                    :
                    <button
                      className="flex justify-center m-10 items-center uppercase cursor-pointer
                 p-2 text-gray-600 border border-gray--600 rounded-xl transition ease-in-out 
                 delay-150 bg-white hover:-translate-y-1 hover:scale-110
                  hover:bg-gray-200 duration-300"
                    >Ответить
                    </button>
                }
              </div>
            )
          default:
            return null
        }
      })()}
    </div>


  )
}