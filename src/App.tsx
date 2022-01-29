import { useState, useEffect, VFC } from 'react'
import { Timer } from './components/Timer'
import './App.css'

export const App: VFC = () => {
  const [timer, setTimer] = useState<number>(0)

  const time = new Date()
  time.setSeconds(time.getSeconds() + timer * 60)

  // 1 ~ 60 までの配列作成
  const len: number = 61
  const minutes: number[] = new Array(len).fill(null).map((_, i) => i)

  const settingMinutes = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimer(Number(e.target.value))
  }

  return (
    <div className="App">
      <header className="App-header">
        <Timer expiryTimestamp={time} />
        <form>
          <select onChange={settingMinutes}>
            {minutes.map((m, i) => (
              <option value={m} key={i}>
                {m}
              </option>
            ))}
          </select>
        </form>
      </header>
    </div>
  )
}
