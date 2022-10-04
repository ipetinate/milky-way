import { ThemeSwitch } from 'components/ThemeSwitch/ThemeSwitch'
import { describe, test, expect, screen, customRender } from 'test'

describe('ThemeSwitch', () => {
  test('Should render component', async () => {
    customRender(<ThemeSwitch />)

    expect(screen).toBeDefined()
  })
})
