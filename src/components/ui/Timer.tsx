'use client'

import { useEffect, useState } from 'react'

interface TimerProps {
  endDate: string
}

export default function Timer({ endDate }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const end = new Date(endDate).getTime()
      const now = new Date().getTime()
      const distance = end - now

      if (distance < 0) {
        clearInterval(timer)
        return
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [endDate])

  return (
    <div className="flex gap-4">
      <div className="text-center">
        <div className="text-3xl font-bold">{timeLeft.days}</div>
        <div className="text-sm text-gray-500">일</div>
      </div>
      <div className="text-3xl font-bold">:</div>
      <div className="text-center">
        <div className="text-3xl font-bold">{timeLeft.hours}</div>
        <div className="text-sm text-gray-500">시간</div>
      </div>
      <div className="text-3xl font-bold">:</div>
      <div className="text-center">
        <div className="text-3xl font-bold">{timeLeft.minutes}</div>
        <div className="text-sm text-gray-500">분</div>
      </div>
      <div className="text-3xl font-bold">:</div>
      <div className="text-center">
        <div className="text-3xl font-bold">{timeLeft.seconds}</div>
        <div className="text-sm text-gray-500">초</div>
      </div>
    </div>
  )
}
