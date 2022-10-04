import { describe, test, expect, screen, customRender } from 'test'

import { Home } from './Home'

describe('Home', () => {
  test('Should render properly', async () => {
    customRender(<Home />)

    expect(screen).toBeDefined()
  })
})
