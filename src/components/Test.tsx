"use client"
import type { Questions, Test } from "@/damains/tests/types"
import { useState, useEffect } from "react"
import CountdownTimer from "@/components/Countdown"
import ProgressBar from "./ProgressBar"
import OptionsView from "./OptionsView"
import FinishTest from "./FinishTest"


interface TestViewProps {
  questions: Questions[]
  test: Test
}

const TestView = ({ test, questions }: TestViewProps) => {
  let timeLimit = test.timeLimit
  const [currentTime, setCurrentTime] = useState<number>(timeLimit * 60);
  const [time, setTime] = useState<string>(formatTime(currentTime));
  const [stopTime, setStopTime] = useState<boolean>(false);
  const [currentQuestionIdIndex, setCurrentQuestionIdIndex] = useState<number>(0)
  let currentQuestionId = test.questionIds[currentQuestionIdIndex]
  const question = questions.find((question) => {
    return question.id === currentQuestionId
  })

  function formatTime(value: number) {
    const minutes = Math.floor(value / 60);
    const seconds = value % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  }
  useEffect(() => {
    setTime(formatTime(currentTime))
    const interval = setInterval(() => {
      if (!stopTime) {
        if (currentTime > 0) { setCurrentTime(currentTime - 1) }
      }
    }, 1000)
    return () => clearInterval(interval)
  });

  const resetTime = () => { setCurrentTime(timeLimit * 60) };
  const handlePlayStopToggle = () => { setStopTime(!stopTime) }

  return (
    <div className="grid mx-5">
      {
        question && time !== "00:00" ?
          <div>
            <CountdownTimer
              time={time}
              resetTime={resetTime}
              handlePlayStopToggle={handlePlayStopToggle}
            />
            <ProgressBar
              test={test}
              currentQuestionId={currentQuestionId}
              currentIndex={currentQuestionIdIndex}
              setCurrentIndex={setCurrentQuestionIdIndex}
            />
            <h2 className="flex justify-center items-center my-3 font-bold 
        text-2xl text-gray-600 uppercase">
              Тест по {test.name}
            </h2>
            <OptionsView
              test={test}
              question={question}
              currentQuestionIdIndex={currentQuestionIdIndex}
              setCurrentQuestionIdIndex={setCurrentQuestionIdIndex}
            />
          </div>
          :
          <FinishTest
            test={test}
            time={time}
            resetTime={resetTime}
            setCurrentQuestionIdIndex={setCurrentQuestionIdIndex} />
      }
    </div>

  )
}

export default TestView