"use client"
import { PlayPause, ArrowClockwise } from "@phosphor-icons/react/dist/ssr";

interface CountdownProps {
  time: string
  resetTime: () => void
  handlePlayStopToggle: () => void
}

const CountdownTimer = ({ time, resetTime, handlePlayStopToggle }: CountdownProps) => {

  return (
    <div className="flex gap-3 justify-center items-center my-3">
      <PlayPause
        size={32}
        className="flex cursor-pointer justify-center h-10 w-10 p-2 items-center 
           text-indigo-600 border border-indigo-600 rounded-full
          transition ease-in-out delay-150 bg-white
          hover:-translate-y-1 hover:scale-110 hover:bg-indigo-200 duration-300"
        onClick={handlePlayStopToggle}
      />
      <div className="grid justify-center items-center">
        <h3 className="flex justify-center items-center text-indigo-600 uppercase">Время</h3>
        <p className="flex cursor-pointer justify-center p-2 
          items-center text-indigo-600 border border-indigo-600 rounded-full">
          {time}
        </p>
      </div>
      <ArrowClockwise
        size={32}
        className="flex cursor-pointer justify-center h-10 w-10 p-2 items-center 
          text-xl text-indigo-600 border border-indigo-600 rounded-full
          transition ease-in-out delay-150 bg-white
          hover:-translate-y-1 hover:scale-110 hover:bg-indigo-200 duration-300"
        onClick={resetTime}
      />
    </div>

  )
}

export default CountdownTimer