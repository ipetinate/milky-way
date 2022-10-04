import { Navbar } from 'components/Navbar'
import { ReactNode } from 'react'

import './AppShell.style.css'

interface AppShellProps {
  children: ReactNode
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className='app_shell'>
      <header className='app_shell__header'>
        <Navbar />
      </header>

      <main className='app_shell__main'>{children}</main>
    </div>
  )
}
