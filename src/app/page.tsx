'use client'
import { TestsMock } from "../domains/tests/mocks"
import type { Test } from "@/domains/tests/types";
import SelectingTest from "@/components/SelectingTest"
import { useState } from "react"

export default function Home() {
  const [selectedTest, setSelectedTest] = useState<Test | null>(null);

  return (
    <div className="p-5">
      <SelectingTest
        Tests={TestsMock}
        selected={selectedTest}
        onClickTest={(test: Test) => { return setSelectedTest(test) }}
      />
    </div>
  )
}