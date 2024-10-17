'use client'
import type { Questions, Test } from "@/damains/tests/types"
import { useState } from "react"
import { CheckCircle } from "@phosphor-icons/react/dist/ssr"
import ButtonsQuestionMenu from "./ButtonsQuestionMenu"
import ProgressBar from "./ProgressBar"

interface QuestionsViewProps {
  questions: Questions[]
  test: Test
}
export default function QuestionsView({ questions, test }: QuestionsViewProps) {

  const [currentQuestionIdIndex, setCurrentQuestionIdIndex] = useState<number>(test.questionIds.indexOf(test.questionIds[0]))
  let currentQuestionId = test.questionIds[currentQuestionIdIndex]

  const question = questions.find((question) => {
    return question.id === currentQuestionId
  })

  if (!question) {
    return null
  }

  return (
    <div className="grid grid-cols-1 mt-5">
      <ProgressBar test={test} currentQuestionId={currentQuestionId} />


      <p className="grid mt-5 px-5 py-10 font-bold border border-indigo-600 rounded-xl">{question.description}</p>
      {(() => {
        switch (question.type) {
          case "ONE_CORRECT_ANSWER":
            return <div className="grid mt-5 px-5">
              {question.options.map((option: any) => {
                return (
                  <div className="flex gap-5 items-center py-2">
                    <input className="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 accent-indigo-600" id={option.id} type='radio' name={question.id} value={option.id} />
                    <label htmlFor={option.id}>{option.description}</label>
                  </div>
                )
              })}
            </div>
          case "MANY_CORRECT_ANSWERS":
            return <div className="grid mt-5 px-5">
              {question.options.map((option: any) => {
                return <div className="flex gap-5 items-center py-2">
                  <input
                    type='checkbox'
                    name={question.id}
                    value={option.id}
                    className="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 accent-indigo-600"
                  />
                  <label htmlFor={option.id}>{option.description}</label>
                </div>
              })}
            </div>
          case "ANSWER_SHORT_TEXT":
            return (
              <div className="flex gap-5 items-center py-2">
                <input
                  className="block p-2.5 w-full text-sm bg-gray-50 border border-indigo-600
                  rounded-xl text-gray-900"
                  placeholder="Дай короткий ответ"
                  id={question.id}
                  type='text' />
              </div>
            )
          case "ANSWER_LONG_TEXT":
            return (
              <div className="flex gap-5 items-center py-2">
                <textarea
                  className="block p-2.5 w-full text-sm bg-gray-50 border border-indigo-600
                  rounded-xl text-gray-900"

                  placeholder="Дай развернутый ответ"
                  id={question.id}
                />
              </div>
            )
          default:
            return null
        }
      })()}
      <ButtonsQuestionMenu test={test} currentIndex={currentQuestionIdIndex} setCurrentIndex={setCurrentQuestionIdIndex} />
    </div>
  )
}
