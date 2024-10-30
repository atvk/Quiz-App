'use client'
import type { Questions, Test } from "@/damains/tests/types"

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

    fetch('http://localhost:3000/api/answersUser',
      { method: form.method, body: formData });

    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);

    if (currentQuestionIdIndex < test.questionIds.length) {
      setCurrentQuestionIdIndex(currentQuestionIdIndex + 1)
    }
  }

  return (
    <div className="grid grid-cols-1 m-5 border border-indigo-600 text-gray-600 rounded-xl">
      <span className="flex justify-start mx-10 px-5 items-center text-gray-600 mt-10 uppercase font-bold">
        {question.description}
      </span>
      {(() => {
        switch (question.type) {
          case "ONE_CORRECT_ANSWER":
            return <form method="post" onSubmit={handleSubmit} className="grid mt-5 px-5">

              {question.options.map((option) => {
                return (
                  <div key={option.id}
                    className="flex gap-5 justify-start mx-10 items-center py-3">
                    <input
                      type="checkbox"
                      name={question.id}
                      value={option.description}
                      className="h-5 w-5 border border-indigo-600 text-indigo-600 
                      focus:ring-indigo-600 accent-indigo-600"
                    />
                    <span>{option.description}</span>
                  </div>
                )
              })}
              <button
                type="submit"
                className="flex justify-center m-10 items-center uppercase cursor-pointer
                 p-2 text-indigo-600 border border-indigo-600 rounded-xl transition ease-in-out 
                 delay-150 bg-white hover:-translate-y-1 hover:scale-110
                  hover:bg-indigo-200 duration-300"
              >Ответить
              </button>
            </form>
          case "MANY_CORRECT_ANSWERS":
            return <form method="post" onSubmit={handleSubmit} className="grid mt-5 px-5">
              {question.options.map((option, index) => {
                return (
                  <div key={index}
                    className="flex gap-5 justify-start mx-10 items-center py-3">
                    <input
                      type="checkbox"
                      name={question.id}
                      value={option.description}
                      className="h-5 w-5 border border-indigo-600 text-indigo-600 
                    focus:ring-indigo-600 accent-indigo-600"
                    />
                    <span className=" text-gray-600">{option.description}</span>
                  </div>
                )
              })}
              <button
                type="submit"
                className="flex justify-center m-10 items-center uppercase cursor-pointer
               p-2 text-indigo-600 border border-indigo-600 rounded-xl transition ease-in-out 
               delay-150 bg-white hover:-translate-y-1 hover:scale-110
                hover:bg-indigo-200 duration-300"
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
                  className="flex justify-start items-center mx-10 p-2 text-sm bg-white 
                  border border-indigo-600 rounded-xl text-gray-600"
                />
                <button
                  type="submit"
                  className="flex justify-center m-10 items-center uppercase cursor-pointer
               p-2 text-indigo-600 border border-indigo-600 rounded-xl transition ease-in-out 
               delay-150 bg-white hover:-translate-y-1 hover:scale-110
                hover:bg-indigo-200 duration-300"
                >Ответить
                </button>
              </form>
            )
          case "ANSWER_LONG_TEXT":
            return (
              <form method="post" onSubmit={handleSubmit} className="grid mt-5 px-5">
                <textarea
                  name={question.id}
                  className="flex justify-start items-center mx-10 p-2 text-sm bg-white 
                  border border-indigo-600 rounded-xl text-gray-600"
                  placeholder="Дай развернутый ответ"
                />
                <button
                  type="submit"
                  className="flex justify-center m-10 items-center uppercase cursor-pointer
               p-2 text-indigo-600 border border-indigo-600 rounded-xl transition ease-in-out 
               delay-150 bg-white hover:-translate-y-1 hover:scale-110
                hover:bg-indigo-200 duration-300"
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
