import ProgressBar from "@/components/ProgressBar"
import Questions from "@/components/Questions"

const Test = ({ test }: any) => {
  return (
    <div className="grid mx-5 p-5 border border-indigo-600 rounded-xl text-gray-900">

      <h2 className="font-bold ">Тест по {test.name}</h2>
      <p className="py-5">Время на прохождение теста {test.timeLimit} минут</p>
      <ProgressBar />
      <Questions />
    </div>
  )
}

export default Test