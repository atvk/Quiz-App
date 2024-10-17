import type { Questions, Test } from "@/damains/tests/types"
import QuestionsView from "@/components/Questions"
//import ProgressBar from "./ProgressBar" <ProgressBar />

interface TestViewProps {
  questions: Questions[]
  test: Test
}

const TestView = ({ test, questions }: TestViewProps) => {

  return (
    <div className="grid mx-5 p-5 border border-indigo-600 rounded-xl text-gray-900">
      <h2 className="font-bold ">Тест по {test.name}</h2>
      <p className="py-5">Время на прохождение теста {test.timeLimit} минут</p>

      <QuestionsView
        key={test.id}
        test={test}
        questions={questions}
      />
    </div>
  )
}

export default TestView