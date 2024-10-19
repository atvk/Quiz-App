'use client'
import type { Test } from "@/damains/tests/types"

interface ButtonsQuestionMenuProps {
  test: Test
  currentIndex: number
  setCurrentIndex: (currentIndex: number) => void
}

export default function ButtonsQuestionMenu({ test, currentIndex, setCurrentIndex }: ButtonsQuestionMenuProps) {

  return (
    <div className="flex justify-between gap-5 ">
      {currentIndex === 0 ?
      null
        :
        <button className="bg-indigo-600 mt-5 rounded-xl px-3 py-2
       text-white hover:bg-indigo-400 flex w-full justify-center items-center"
          onClick={() => {
            if (currentIndex < test.questionIds.length) {
              setCurrentIndex(currentIndex - 1)
            }
          }}
        >
          Перепроверить предыдущий ответ
        </button>}
      {currentIndex === test.questionIds.length - 1 ?
        <button className="bg-indigo-600 mt-5 rounded-xl px-3 py-2
          text-white hover:bg-indigo-400 flex w-full justify-center items-center"
          onClick={() => { alert("Ура! Вы прошли тест!") }}>Ответить на последний вопрос
        </button>
        :
        <button className="bg-indigo-600 mt-5 rounded-xl px-3 py-2
          text-white hover:bg-indigo-400 flex w-full justify-center items-center"
          onClick={() => {
            if (currentIndex < test.questionIds.length) { setCurrentIndex(currentIndex + 1) }
          }}>Ответить и перейти к следующему вопросу
        </button>}
    </div>
  )
}
