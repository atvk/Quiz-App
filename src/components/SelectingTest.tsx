import { Test } from "../app/page"
import Link from "next/link"

type SelectingTestProps = {
  Tests: Test[];
  selected: Test | null;
  onClickTest: (test: Test) => void;
}

export default function SelectingTest({ Tests, selected, onClickTest }: SelectingTestProps) {

  return (
    <div className="grid">
      <h1 className='flex justify-center text-gray-900 text-md md:text-xl mb-3 border
       border-gray-200 rounded-3xl p-8'>
        Какой тест ты хочешь пройти?
      </h1>
      <div className="grid grid-cols-1 xl:grid xl:grid-cols-4 sm:grid sm:grid-cols-2 gap-4">
        {Tests.map((test) => (
          <div
            key={test.id}
            className={`${selected !== test ?
              "border border-gray-200 cursor-pointer rounded-3xl p-8" :
              "border border-indigo-600 cursor-pointer rounded-3xl p-8"}`}
            onClick={() => { onClickTest(test) }}
          >
            <p className="text-sm md:text-xl">Тест на знание:</p>
            <h2 className='text-indigo-600 text-xl md:text-xl xl:text-2xl ont-bold'>{test.name}</h2>

            <div className="flex justify-beetween items-center gap-2 mt-4">
              <p className="text-sm md:text-xl">Время на прохождение:</p>
              <p className="text-sm md:text-xl font-bold">{test.timeLimit}</p>
            </div>
            <div className="flex justify-beetween items-center gap-2 mt-4">
              <p className="text-sm md:text-xl">Количество вопросов:</p>
              <p className="text-sm md:text-xl font-bold">{test.questionIds.length}</p>
            </div>
            <div className="flex items-center mt-4">
              <Link
                href={test.id}
                className=' bg-indigo-600 m-auto rounded-3xl px-3 py-2 text-white hover:bg-indigo-400'>
                Пройти тест
              </Link>
            </div>








          </div>
        ))}
      </div>


    </div>



  )





};