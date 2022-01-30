import { useState, useEffect, VFC } from 'react'
import { Timer } from './components/Timer'
import { SettingMinutes } from './SettingMinutes'
import './App.css'

export const App: VFC = () => {
  const [timer, setTimer] = useState<number>(0)

  const time = new Date()
  time.setSeconds(time.getSeconds() + timer * 60)

  const settingMinutes = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimer(Number(e.target.value))
  }

  return (
    <div className="App">
      <header className="App-header">
        <Timer expiryTimestamp={time} />
        <SettingMinutes settingMinutes={settingMinutes} />
      </header>
    </div>
  )
}
