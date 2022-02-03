import { atom } from 'recoil'
// import type { Time } from '../types/Time'

export const timeState = atom<number>({
    key: 'settingTime',
    default: 0
})
