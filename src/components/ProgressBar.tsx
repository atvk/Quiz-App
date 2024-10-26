'use client'
import type { Test } from "@/damains/tests/types"
import { CaretDoubleRight, CaretDoubleLeft } from "@phosphor-icons/react/dist/ssr"

interface ProgressBarProps {
  test: Test
  currentQuestionId: string;
  currentIndex: number
  setCurrentIndex: (currentIndex: number) => void
}

export default function ProgressBar({ test, currentIndex, setCurrentIndex }: ProgressBarProps) {

  return (
    <div className="flex justify-center items-center gap-2">
      <div>
        {currentIndex === 0 ?
          <CaretDoubleLeft
            className="flex relative justify-center items-center text-gray-200 font-bold"
            size={20}
            onClick={() => { if (currentIndex < test.questionIds.length) { setCurrentIndex(currentIndex) } }} />
          :
          <CaretDoubleLeft
            className="flex relative justify-center items-center text-indigo-600 font-bold"
            size={20}
            onClick={() => { if (currentIndex < test.questionIds.length) { setCurrentIndex(currentIndex - 1) } }} />
        }
      </div>
      <div className="flex relative justify-center h-10 w-10 p-2  items-center text-xl text-indigo-600 font-bold border
     border-indigo-600 rounded-full">
        {currentIndex + 1}/{test.questionIds.length}
      </div>
      <div>{currentIndex === test.questionIds.length - 1 ?
        <CaretDoubleRight
          className="flex relative justify-center items-center text-gray-200 font-bold"
          size={20}
          onClick={() => { alert("Ура! Вы прошли тест!") }}
        />
        :
        <CaretDoubleRight
          className="flex relative justify-center items-center text-indigo-600 font-bold"
          size={20}
          onClick={() => { if (currentIndex < test.questionIds.length) { setCurrentIndex(currentIndex + 1) } }}
        />
      }
      </div>
    </div>
  )
}
