require('dotenv').config()
const script = require('./triggerBatch')
describe('trigger', () => {
  const channel = 'continuous-integration'
  const name = 'some-event'
  it('should work with correct inputs', async () => {
    const output = await script({ batch: [{ channel, name, data: { test: 'some value' } }] })
    expect(output).toEqual({ message: 'sent' })
  })
})
