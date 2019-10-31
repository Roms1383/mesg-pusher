require('dotenv').config()
const script = require('./trigger')
describe('trigger', () => {
  const channel = 'continuous-integration'
  const name = 'some-event'
  it('should work with correct inputs', async () => {
    const output = await script({ name, channel, data: { test: 'some value' } })
    expect(output).toEqual({ message: 'sent' })
  })
})
