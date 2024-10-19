'use client'
import type { Questions } from "@/damains/tests/types"
import { useState } from "react"


interface QuestionsViewProps {
  question: Questions
}

export default function OptionsView({ question }: QuestionsViewProps) {

  const [checked, setChecked] = useState(true);
  function handleChange() { setChecked(!checked) }

  return (
    <div className="grid grid-cols-1 mt-5">
      {(() => {
        switch (question.type) {
          case "ONE_CORRECT_ANSWER":
            return <div className="grid mt-5 px-5">
              {question.options.map((option: any) => {
                return (
                  <div key={option.id}
                    className="flex gap-5 items-center py-2">
                    <input
                      type='checkbox'
                      onChange={handleChange}
                      className="h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 accent-indigo-600"
                      id={option.id}
                      name={question.id}
                      value={option.id}
                    />
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
                    onChange={handleChange}
                    name={question.id}
                    value={option.id}
                    className="display- h-5 w-5 border-gray-300 text-indigo-600 focus:ring-indigo-600 accent-indigo-600 "
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
                  className="block p-2.5 w-full text-sm bg-gray-50 border
                   border-indigo-600 rounded-xl text-gray-900"
                  placeholder="Дай развернутый ответ"
                  id={question.id}
                />
              </div>
            )
          default:
            return null
        }
      })()}

    </div>
  )
}
