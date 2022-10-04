import { describe, test, expect, screen, customRender } from 'test'
import { App } from './App'

describe('context', () => {
  test('Should testCase', async () => {
    customRender(<App />)

    expect(screen).toBeDefined()
  })
})
