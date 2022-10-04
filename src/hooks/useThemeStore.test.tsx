import {
  describe,
  test,
  expect,
  screen,
  renderHook,
  waitFor
} from 'test'

import { useToggle } from 'hooks/useToggle'
import { useThemeStore } from 'hooks/useThemeStore'

describe('UseThemeStore', () => {
  test('Should get theme data from store', async () => {
    const { result: stateResult } = renderHook(() =>
      useThemeStore((s: any) => s.theme)
    )
    const { result: setThemeResult } = renderHook(() =>
      useThemeStore((s: any) => s.setTheme)
    )

    await waitFor(() => expect(stateResult.current).toEqual('light'))

    await setThemeResult.current('dark')

    await waitFor(() => expect(stateResult.current).toEqual('dark'))
  })
})
