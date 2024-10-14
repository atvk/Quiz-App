
import type { Questions, QuestionId } from "@/damains/tests/types"

interface QuestionsViewProps {
  questions: Questions[]
  questionId: QuestionId
}

export default function QuestionsView({ questions, questionId }: QuestionsViewProps) {

  const question = questions.find((question) => {
    return question.id === questionId
  })

  if (!question) {
    return null
  }

  return (
    <div className="grid grid-cols-1 mt-5">

      <button className="bg-indigo-600 mt-5 rounded-xl px-3 py-2
       text-white hover:bg-indigo-400 flex w-full justify-center items-center"
       >
        Следующий вопрос
      </button>

      <p className="grid mt-5 px-5 font-bold border border-indigo-600 rounded-xl">{question.description}</p>
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

    </div>
  )
}
