import React, { useEffect, useState } from "react";

function Timer() {
  const [timerState, setTimerState] = useState()

  useEffect(() => {
    setInterval(() => {
      const date = new Date()
      setTimerState(date.toLocaleTimeString())
    }, 1000)
  }, [])
  return <div style={{ fontSize: '55px', color: 'purple'}}>{timerState}</div>
}

export default Timer;