import create from 'zustand'

import { Theme } from 'models/Theme'

export const useThemeStore = create((set) => ({
  theme: Theme.Light,
  setTheme: (theme: Theme) => set(() => ({ theme }))
}))
