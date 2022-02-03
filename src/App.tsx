import { useState, useEffect, VFC } from 'react'
import { Timer } from './components/Timer'
import { SettingMinutes } from './SettingMinutes'
import './App.css'

import { useRecoilValue } from 'recoil'
import { getTimeSelector } from './selectors/getTimeSelector'

export const App: VFC = () => {
  // useRecoilValue に selector を渡す
  const timer = useRecoilValue(getTimeSelector)

  const time = new Date()
  time.setSeconds(time.getSeconds() + timer * 60)

  return (
    <div className="App">
      <header className="App-header">
        <Timer expiryTimestamp={time} />
        <SettingMinutes />
      </header>
    </div>
  )
}
