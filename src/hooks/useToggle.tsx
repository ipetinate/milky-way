import { useCallback, useState } from 'react'

type UseToggleReturn = [boolean, () => void]

export function useToggle(
  initialState: boolean = false
): UseToggleReturn {
  const [state, setState] = useState(initialState)

  const toggle = useCallback(() => setState((x) => !x), [])

  return [state, toggle]
}
