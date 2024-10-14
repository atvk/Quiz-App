'use client'

import type { Test } from "@/damains/tests/types";
import TestList from "@/components/TestList"
import { useState } from "react"
import useFetch from "@/hooks/useFetch";

export default function Home() {
const { data: tests, loading, error } = useFetch(`${process.env.NEXT_PUBLIC_API_HOST}/tests/`)
const [selectedTest, setSelectedTest] = useState<Test | null>(null);

  return (
    <div className="p-5">
      {error && <>{error}</>}
      {loading && <>Loading...</>}
      {tests && <TestList
        tests={tests}
        selected={selectedTest}
        onClickTest={(test: Test) => { return setSelectedTest(test) }}
      />}
    </div>
  )
}