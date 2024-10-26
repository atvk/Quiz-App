'use client'
import type { Questions, Test } from "@/damains/tests/types"
import { useState } from "react"

interface QuestionsViewProps {
  question: Questions
  test: Test
  currentQuestionIdIndex: number
  setCurrentQuestionIdIndex: (currentIndex: number) => void
}
export default function OptionsView({ test, question,
  currentQuestionIdIndex, setCurrentQuestionIdIndex }: QuestionsViewProps) {
  
function handleSubmit(e: { preventDefault: () => void; target: any }) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

   
  const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    
    if (currentQuestionIdIndex < test.questionIds.length) {
      setCurrentQuestionIdIndex(currentQuestionIdIndex + 1)
    }
  }

  return (
    <div className="grid grid-cols-1 mt-5">
      {(() => {
        switch (question.type) {
          case "ONE_CORRECT_ANSWER":
            return <form method="post" onSubmit={handleSubmit} className="grid mt-5 px-5">
              {question.options.map((option) => {
                return (
                  <div key={option.id}
                    className="flex gap-5 items-center py-2">
                    <input
                      type="checkbox"
                      name={question.id}
                      value={option.description}
                      className="h-5 w-5 border-gray-300 text-indigo-600 focus:
                       ring-indigo-600 accent-indigo-600"
                    />
                    <span>{option.description}</span>
                  </div>
                )
              })}
              <button
                type="submit"
                className="bg-indigo-600 mt-5 rounded-xl px-3 py-2
     text-white hover:bg-indigo-400 flex w-full justify-center items-center"
              >Ответить
              </button>
            </form>
          case "MANY_CORRECT_ANSWERS":
            return <form method="post" onSubmit={handleSubmit} className="grid mt-5 px-5">
              {question.options.map((option, index) => {
                return (
                  <div key={index}
                    className="flex gap-5 items-center py-2">
                    <input
                      type="checkbox"
                      name={question.id}
                      value={option.description}
                      className="h-5 w-5 border-gray-300 text-indigo-600 focus:
                       ring-indigo-600 accent-indigo-600"
                    />
                    <span>{option.description}</span>
                  </div>
                )
              })}
              <button
                type="submit"
                className="bg-indigo-600 mt-5 rounded-xl px-3 py-2
     text-white hover:bg-indigo-400 flex w-full justify-center items-center"
              >Ответить
              </button>
            </form>
          case "ANSWER_SHORT_TEXT":
            return (
              <form method="post" onSubmit={handleSubmit} className="grid mt-5 px-5">
                <input
                  type='text'
                  name={question.id}
                  placeholder="Дай короткий ответ"
                  className="block p-2.5 w-full text-sm bg-gray-50 border border-indigo-600
                  rounded-xl text-gray-900"
                />
                <button
                  type="submit"
                  className="bg-indigo-600 mt-5 rounded-xl px-3 py-2
     text-white hover:bg-indigo-400 flex w-full justify-center items-center"
                >Ответить
                </button>
              </form>
            )
          case "ANSWER_LONG_TEXT":
            return (
              <form method="post" onSubmit={handleSubmit} className="flex gap-5 items-center py-2">
                <textarea
                  name={question.id}
                  className="block p-2.5 w-full text-sm bg-gray-50 border
                   border-indigo-600 rounded-xl text-gray-900"
                  placeholder="Дай развернутый ответ"
                />
                <button
                  type="submit"
                  className="bg-indigo-600 mt-5 rounded-xl px-3 py-2 text-white hover:bg-indigo-400 flex w-full justify-center items-center"
                >Ответить
                </button>
              </form>
            )
          default:
            return null
        }
      })()}
    </div>
  )
}
