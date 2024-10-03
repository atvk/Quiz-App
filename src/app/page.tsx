'use client'
import Header from "@/components/Header"
import SelectingTest from "@/components/SelectingTest"
import { useState } from "react"
export type TestId = string
export type QuestionId = string
export interface Test {
  id: TestId
  name: string
  questionIds: QuestionId[]
  timeLimit: number | null
}
export const Tests: Test[] = [
  {
    id: "1",
    name: "Биологии",
    questionIds: ["QUESTION_ONE", "QUESTION_TWO", "QUESTION_THREE"],
    timeLimit: 10,
  },
  {
    id: "2",
    name: "Географии",
    questionIds: ["QUESTION_FOUR", "QUESTION_FIVE", "QUESTION_SIX"],
    timeLimit: 15,
  },
  {
    id: "3",
    name: "Истории",
    questionIds: ["QUESTION_SEVEN", "QUESTION_EIGHT", "QUESTION_NINE"],
    timeLimit: 20,
  },
  {
    id: "4",
    name: "Математики",
    questionIds: ["QUESTION_TEN", "QUESTION_ELEVEN", "QUESTION_TWELVE"],
    timeLimit: 40,
  },

];

export default function Home() {
  const [selectedTest, setSelectedTest] = useState<Test | null>(null);

  return (
    <div className="p-5"> 
          <SelectingTest
            Tests={Tests}
            selected={selectedTest}
            onClickTest={(test: Test) => { return setSelectedTest(test) }}
          />
       
      
    </div>
  )
}