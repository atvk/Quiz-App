import type { Test } from "../damains/tests/types"
import Link from "next/link"
import { PawPrint, GlobeStand, Books, MathOperations } from "@phosphor-icons/react/dist/ssr"

type TestListProps = {
  tests: Test[];
  selected: Test | null;
  onClickTest: (test: Test) => void;
}

export default function TestList({ tests, selected, onClickTest }: TestListProps) {

  return (
    <div className="grid">
      <h1 className='flex justify-center text-gray-600 font-bold 
      text-xl mb-3 border border-gray-600 rounded-xl p-2'>
        Какой тест ты хочешь пройти?
      </h1>
      <div className="grid grid-cols-1 xl:grid xl:grid-cols-4 sm:grid sm:grid-cols-2 gap-4">
        {tests.map((test) => (
          <div
            key={test.id}
            className={`${selected !== test ?
              "border border-gray-600 cursor-pointer rounded-xl p-8" :
              "border border-indigo-600 cursor-pointer rounded-xl p-8"}`}
            onClick={() => { onClickTest(test) }}
          >
            <p className="flex justify-center text-sm">Тест на знание:</p>
            <h2
              className={`${selected !== test ?
                "flex justify-center text-gray-600 mt-4 text-2xl md:text-2xl xl:text-2xl font-bold" :
                "flex justify-center text-indigo-600 mt-4 text-2xl md:text-2xl xl:text-2xl font-bold"
                }`}
            >
              {test.name}
            </h2>
            {(() => {
              switch (test.id) {
                case "ZOOLOGY_TEST":
                  return (<PawPrint size={64}
                    className={`${selected !== test ?
                      " text-gray-600 mt-5 flex w-full justify-center items-center" :
                      " text-indigo-600 mt-5 flex w-full justify-center items-center"
                      }`}
                  />)

                case "GEOGRAPHY_TEST":
                  return (<GlobeStand size={64}
                    className={`${selected !== test ?
                      " text-gray-600 mt-5 flex w-full justify-center items-center" :
                      " text-indigo-600 mt-5 flex w-full justify-center items-center"
                      }`}
                  />)

                case "HISTORY_TEST":
                  return (<Books size={64}
                    className={`${selected !== test ?
                      " text-gray-600 mt-5 flex w-full justify-center items-center" :
                      " text-indigo-600 mt-5 flex w-full justify-center items-center"
                      }`}
                  />)

                case "MATHEMATICS_TEST":
                  return (<MathOperations size={64}
                    className={`${selected !== test ?
                      " text-gray-600 mt-5 flex w-full justify-center items-center" :
                      " text-indigo-600 mt-5 flex w-full justify-center items-center"
                      }`}
                  />)
                default:
                  return null
              }
            })()}
            <div className="flex justify-beetween items-center gap-2 mt-4 text-sm">
              Время на прохождение: {<p className={`${selected !== test ?
                "text-xl text-gray-600" :
                "text-xl text-indigo-600 font-bold"}`}
              >{test.timeLimit}</p>} минут

            </div>
            <div className="flex justify-beetween items-center gap-2 mt-4 text-sm">
              Количество вопросов:{<p className={`${selected !== test ?
                "text-xl text-gray-600" :
                "text-xl text-indigo-600 font-bold"}`}
              >{test.questionIds.length}</p>}
            </div>
            <div className="flex mt-4">
              <button
                className={`${selected !== test ?
                  "flex justify-center w-full items-center uppercase cursor-pointer p-2 text-gray-600 border border-gray-600 rounded-xl transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-gray-200 duration-300"
                  :
                  "flex justify-center w-full items-center uppercase cursor-pointer p-2 text-indigo-600 border border-indigo-600 rounded-xl transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-indigo-200 duration-300"
                  }`}


              >
                <Link href={`test/` + test.id}>Пройти тест</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div >
  )
};