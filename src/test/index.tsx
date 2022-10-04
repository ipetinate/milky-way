import { ReactElement } from 'react'
import { render as rtlRender } from '@testing-library/react'

import type { RenderOptions } from '@testing-library/react'

import { BrowserRouter } from 'react-router-dom'

import userEvent from '@testing-library/user-event'

interface WrapperProps {
  children: ReactElement
}

type IRenderOptions = RenderOptions & {
  route?: string
  [key: string]: unknown
}

const Wrapper = ({ children }: WrapperProps) => (
  <BrowserRouter>{children}</BrowserRouter>
)

export const customRender = (
  ui: ReactElement,
  { route = '/', ...renderOptions }: IRenderOptions = {}
) => {
  window.history.pushState({}, 'Testing...', route)

  return {
    user: userEvent.setup(),
    ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
  }
}

// re-export everything
export * from '@testing-library/react'
export * from 'vitest'
