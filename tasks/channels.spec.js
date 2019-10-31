require('dotenv').config()
const script = require('./channels')
describe('channels', () => {
  it('should work with correct inputs', async () => {
    const output = await script({})
    expect(output).toHaveProperty('channels')
  })
})
