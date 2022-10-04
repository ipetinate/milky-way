import { Router } from 'router'
import { Toaster } from 'react-hot-toast'
import { AppShell } from 'components/AppShell'

export function App() {
  return (
    <AppShell>
      <Toaster />

      <Router />
    </AppShell>
  )
}
