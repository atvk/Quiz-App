'use client'
import type { Test } from "@/damains/tests/types"
import { MapPinSimpleArea } from "@phosphor-icons/react/dist/ssr"

interface ProgressBarProps {
  test: Test
  currentQuestionId: string;
}

export default function ProgressBar({ test, currentQuestionId }: ProgressBarProps) {
  return (
    <div className="flex justify-center gap-5">
      {test.questionIds.map((questionId) => {
        return questionId === currentQuestionId ?
          (
            <>
              <div aria-hidden="true" className="flex items-center">
                <div className="h-0.5 w-full bg-indigo-600" />
              </div>
              <a
                href="#"
                className="relative flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-900"
              >
                <MapPinSimpleArea aria-hidden="true" className="h-5 w-5 text-white" />

              </a>
            </>)
          :
          (<>
            <div aria-hidden="true"
              className="flex items-center">
              <div className="h-0.5 w-full bg-gray-200" />
            </div>
            <a
              href="#"
              aria-current="step"
              className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white"
            >
              <MapPinSimpleArea aria-hidden="true" className="h-5 w-5 text-gray-300" />

            </a>
          </>)
      }
      )}
    </div>
  )
}
