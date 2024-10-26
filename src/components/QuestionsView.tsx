'use client'
import type { Questions, Test } from "@/damains/tests/types"
import { useState } from "react"

import ProgressBar from "./ProgressBar"
import OptionsView from "./OptionsView"

interface QuestionsViewProps {
  questions: Questions[]
  test: Test

}
export default function QuestionsView({ questions, test }: QuestionsViewProps) {

  const [currentQuestionIdIndex, setCurrentQuestionIdIndex] = useState<number>(test.questionIds.indexOf(test.questionIds[0]))
  let currentQuestionId = test.questionIds[currentQuestionIdIndex]

  const question = questions.find((question) => {
    return question.id === currentQuestionId
  })

  if (!question) {
    return null
  }
  return (
        <div className="grid mt-5">
          <ProgressBar
            test={test}
            currentQuestionId={currentQuestionId}
            currentIndex={currentQuestionIdIndex}
            setCurrentIndex={setCurrentQuestionIdIndex}
          />
          <span className="grid mt-5 px-5 py-10 font-bold border border-indigo-600 rounded-xl">{question.description}</span>
          <OptionsView
            test={test}
            question={question}
            currentQuestionIdIndex={currentQuestionIdIndex}
            setCurrentQuestionIdIndex={setCurrentQuestionIdIndex}
          />
        </div>
  )
}
