import { describe, test, expect, screen, customRender } from 'test'

import { Router } from './Router'

describe('Router', () => {
  test('Should render routes', async () => {
    customRender(<Router />)

    expect(screen).toBeDefined()
  })
})
