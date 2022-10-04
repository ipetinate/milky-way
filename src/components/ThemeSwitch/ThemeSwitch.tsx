import { Button } from 'components/Button'
import { useThemeStore } from 'hooks/useThemeStore'
import { Theme } from 'models/Theme'
import './ThemeSwitch.style.css'

export function ThemeSwitch() {
  const theme = useThemeStore((x) => x.theme)
  const changeTheme = useThemeStore((x) => x.setTheme)

  return (
    <div className='theme_switch'>
      <Button
        onClick={() =>
          changeTheme(theme === 'dark' ? Theme.Light : Theme.Dark)
        }
      >
        {theme === Theme.Dark ? 'Claro' : 'Escuro'}
      </Button>
    </div>
  )
}
