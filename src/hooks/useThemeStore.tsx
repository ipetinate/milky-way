import create from 'zustand'

import { Theme } from 'models/Theme'

function switchThemeClass(theme: Theme) {
  if (theme === Theme.Dark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

interface ThemeStore {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: Theme.Light,
  setTheme: (theme: Theme) => {
    window.localStorage.setItem('theme', theme)
    switchThemeClass(theme)

    return set(() => ({ theme }))
  }
}))
