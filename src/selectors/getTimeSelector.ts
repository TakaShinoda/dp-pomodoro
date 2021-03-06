import { selector } from 'recoil'
import { timeState } from '../atoms/SettingTimeAtoms'
// import type { Time } from '../types/Time'

export const getTimeSelector = selector<number>({
    key: 'getTimeSelector',
    get: ({ get }) => {
        const minutes = get(timeState)
        return minutes
    }
})
