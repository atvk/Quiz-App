import ProgressBar from "@/components/ProgressBar"
import Questions from "@/components/Questions"

const Test = ({ test }: any) => {
  return (
    <div className="grid mx-5 p-5 border border-indigo-600 rounded-xl text-gray-900">

      <h2 className="font-bold ">Тест по {test.name}</h2>
      <p className="py-5">Время на прохождение теста {test.timeLimit} минут</p>
      <ProgressBar />
      <Questions />
      <button className="bg-indigo-600 mt-5 rounded-xl px-3 py-2 text-white hover:bg-indigo-400 
      flex w-full justify-center items-center">
        Следующий вопрос
      </button>
    </div>
  )
}

export default Test