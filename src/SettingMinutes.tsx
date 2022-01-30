import React, { FC } from 'react'

type ChildrenProps = {
  settingMinutes: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const SettingMinutes: FC<ChildrenProps> = ({ settingMinutes }) => {
  // 0 ~ 60 までの配列作成
  const len: number = 61
  const minutes: number[] = new Array(len).fill(null).map((_, i) => i)

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
