import ProgressBar from "@/components/ProgressBar"
import Questions from "@/components/Questions"



const Test = ({ test, questions}: any) => {
  return (
    <div className="grid mx-5 p-5 border border-indigo-600 rounded-xl text-gray-900">

      <h2 className="font-bold ">Тест по {test.name}</h2>
      <p className="py-5">Время на прохождение теста {test.timeLimit} минут</p>
      <ProgressBar />
      <Questions />
      {questions ? <div className="grid grid-cols-1 xl:grid xl:grid-cols-4 sm:grid sm:grid-cols-2 gap-4">
        {questions.map((question:any) => (<div key={question.id}>{question.description}</div>))}</div> : null}
      <button className="bg-indigo-600 mt-5 rounded-xl px-3 py-2 text-white hover:bg-indigo-400 
      flex w-full justify-center items-center">
        Следующий вопрос
      </button>
    </div>
  )
}

export default Test