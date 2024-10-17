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
        <button className="bg-indigo-600 mt-5 rounded-xl px-3 py-2
          text-white hover:bg-indigo-400 flex w-full justify-center items-center"
          onClick={() => { alert("LET'S GO AHEAD") }}
        >
          Только вперед
        </button>
        :
        <button className="bg-indigo-600 mt-5 rounded-xl px-3 py-2
       text-white hover:bg-indigo-400 flex w-full justify-center items-center"
          onClick={() => {
            if (currentIndex < test.questionIds.length) {
              setCurrentIndex(currentIndex - 1)
            }
          }}
        >
          Предыдущий вопрос
        </button>}
      {currentIndex === test.questionIds.length - 1 ?
        <button className="bg-indigo-600 mt-5 rounded-xl px-3 py-2
          text-white hover:bg-indigo-400 flex w-full justify-center items-center"
          onClick={() => { alert("CONGRATULATIONS! THAT WAS THE LAST QUESTION") }}>Ответить на последний вопрос
        </button>
        :
        <button className="bg-indigo-600 mt-5 rounded-xl px-3 py-2
          text-white hover:bg-indigo-400 flex w-full justify-center items-center"
          onClick={() => {
            if (currentIndex < test.questionIds.length) { setCurrentIndex(currentIndex + 1) }
          }}> Следующий вопрос
        </button>}
    </div>
  )
}
