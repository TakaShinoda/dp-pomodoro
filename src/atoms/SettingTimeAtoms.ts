import { atom } from 'recoil'
import type { Time } from '../types/Time'

export const timeState = atom<Time>({
    key: 'settingTime',
    default: {
        minutes: 0
    },
})
