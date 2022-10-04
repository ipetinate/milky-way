import { Router } from 'router'
import { Toaster } from 'react-hot-toast'
import { AppShell } from 'components/AppShell'
import { QueryClientProvider } from '@tanstack/react-query'
import { QueryClient } from '@tanstack/query-core'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppShell>
        <Toaster />

        <Router />
      </AppShell>
    </QueryClientProvider>
  )
}
