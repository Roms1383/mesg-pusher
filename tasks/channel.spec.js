require('dotenv').config()
const script = require('./channel')
describe('channel', () => {
  const name = 'continuous-integration'
  it('should work with correct inputs', async () => {
    const output = await script({ name })
    expect(output).toHaveProperty('occupied')
    expect(output).toHaveProperty('user_count')
    expect(output).toHaveProperty('subscription_count')
  })
})
