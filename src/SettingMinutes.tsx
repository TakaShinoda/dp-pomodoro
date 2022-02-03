import React, { FC } from 'react'
import { useRecoilValue, useSetRecoilState, SetterOrUpdater } from 'recoil'
import { timeState } from './atoms/SettingTimeAtoms'

export const SettingMinutes: FC = () => {
  // 0 ~ 60 までの配列作成
  const len: number = 61
  const minutes: number[] = new Array(len).fill(null).map((_, i) => i)

  // useRecoilValueでatom(timeState)の値を取得
  //   const timeStateValue = useRecoilValue(timeState)

  // useSetRecoilStateでtimeStateの値を更新するSetter関数を取得
  const setTimeStateValue: SetterOrUpdater<number> =
    useSetRecoilState(timeState)

  const settingMinutes = (e: any) => setTimeStateValue(Number(e.target.value))

  return (
    <form>
      <select onChange={settingMinutes}>
        {minutes.map((m, i) => (
          <option value={m} key={i}>
            {m}
          </option>
        ))}
      </select>
    </form>
  )
}
