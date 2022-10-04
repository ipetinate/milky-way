import {
  describe,
  test,
  expect,
  screen,
  renderHook,
  waitFor
} from 'test'

import { useToggle } from 'hooks/useToggle'

describe('UseToggle', () => {
  test('Should toggle from false to true', async () => {
    const { result } = renderHook(() => useToggle())

    await waitFor(() => expect(result.current[0]).toBeFalsy())

    result.current[1]()

    await waitFor(() => expect(result.current[0]).toBeTruthy())
  })

  test('Should toggle from true to false (w/ initial value as true', async () => {
    const { result } = renderHook(() => useToggle(true))

    await waitFor(() => expect(result.current[0]).toBeTruthy())

    result.current[1]()

    await waitFor(() => expect(result.current[0]).toBeFalsy())
  })
})
