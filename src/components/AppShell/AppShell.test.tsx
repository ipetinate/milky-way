import { describe, test, expect, screen, customRender } from 'test'

import { AppShell } from './AppShell'

describe('AppShel', () => {
  test('Should render children', async () => {
    customRender(
      <AppShell>
        <h1>Test</h1>
      </AppShell>
    )

    expect(
      await screen.findByRole('heading', {
        level: 1,
        name: 'Test'
      })
    ).toBeInTheDocument()
  })
})
