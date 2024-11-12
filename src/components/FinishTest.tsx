
import type { Test } from "@/damains/tests/types"
import Link from "next/link"

interface FinishTestProps {
  setCurrentQuestionIdIndex: (currentIndex: number) => void
  resetTime: () => void
  test: Test
  time: any;
}

const FinishTest = ({ time, test, setCurrentQuestionIdIndex, resetTime }: FinishTestProps) => {

  return (

      <div className="grid justify-center items-center">
        {time === "00:00" ?
          <h2 className="flex uppercase justify-center text-gray-600">
            Увы, но время вышло!
          </h2>
          :
          <h2 className="flex uppercase justify-center text-gray-600">
            Поздравляем, Тест пройден!
          </h2>

        }
        <div className="flex gap-5 mt-5">
          <button
            className="flex uppercase cursor-pointer justify-center p-2 items-center text-indigo-600 border border-indigo-600 rounded-xl
            transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-indigo-200 duration-300"
            onClick={() => {
              resetTime()
              setCurrentQuestionIdIndex(test.questionIds.indexOf(test.questionIds[0]))
            }}
          >Пройти снова
          </button>
          <Link
            href={`/`}
            className="flex  uppercase cursor-pointer justify-center p-2 items-center text-indigo-600 border border-indigo-600 rounded-xl
            transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-indigo-200 duration-300"
          >
            Выбрать новый тест
          </Link>
        </div>

      </div>

  

  )
}

export default FinishTest