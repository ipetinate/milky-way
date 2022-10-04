import { describe, test, expect, screen, customRender } from 'test'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  test('Should render properly', async () => {
    customRender(<Navbar />)

    expect(screen).toBeDefined()
  })
})
