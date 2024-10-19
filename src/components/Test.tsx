"use client"
import type { Questions, Test } from "@/damains/tests/types"
import { useState, useEffect } from "react"
import QuestionsView from "@/components/QuestionsView"


interface TestViewProps {
  questions: Questions[]
  test: Test
}

const TestView = ({ test, questions }: TestViewProps) => {
  let timeLimit: number = test.timeLimit
  const [currentTime, setCurrentTime] = useState<number>(timeLimit * 60);
  const [time, setTime] = useState<String>(formatTime(currentTime));

  function formatTime(value: number) {
    const minutes = Math.floor(value / 60);
    const seconds = value % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  }

  useEffect(() => {
    setTime(formatTime(currentTime))
    const timer: any = currentTime > 0 &&
      setTimeout(() => setCurrentTime(currentTime - 1), 1000)
    return () => clearInterval(timer);
  }, [currentTime]);

  return (
    <div className="grid mx-5 p-5 border border-indigo-600 rounded-xl text-gray-900">
      <h2 className="font-bold ">Тест по {test.name}</h2>
      <p className="py-5">Время на прохождение теста {time} минут</p>
      {time !== "00:00" ?
        <QuestionsView
          test={test}
          questions={questions}
        />
        :
        <div>Время вышло</div>}
    </div>
  )
}

export default TestView