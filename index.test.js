require('dotenv').config()
const Client = require('pusher-js')
const MESG = require('mesg-js').application()
const execute = async ({ taskKey, params, instanceHash }) => {
  const { outputs } = await MESG.executeTaskAndWaitResult({
    taskKey,
    inputs: MESG.encodeData(params),
    instanceHash
  })
  return MESG.decodeData(outputs)
}
describe('Tests', () => {
  const channel = 'continuous-integration'
  const event = 'some-event'
  let instanceHash
  beforeAll(async () => {
    instanceHash = await MESG.resolve('com.mesg.pusher')
    const client = new Client(process.env.PUSHER_APP_KEY, { cluster: process.env.PUSHER_CLUSTER, forceTLS: true })
    const subscription = client.subscribe(channel)
    subscription.bind(event)
  })
  it('channel', async () => {
    const result = await execute({
      taskKey: 'channel',
      params: { name: channel },
      instanceHash
    })
    expect(result).toHaveProperty('occupied')
    expect(result).toHaveProperty('user_count')
    expect(result).toHaveProperty('subscription_count')
  })
  it('channels', async () => {
    const result = await execute({
      taskKey: 'channels',
      params: {},
      instanceHash
    })
    expect(result).toHaveProperty('channels')
    expect(Array.isArray(result.channels)).toBe(true)
  })
  it('trigger', async () => {
    const result = await execute({
      taskKey: 'trigger',
      params: { name: event, channel, data: { test: 'some value' } },
      instanceHash
    })
    expect(result).toHaveProperty('message')
    expect(result.message).toBe('sent')
  })
  it('triggerBatch', async () => {
    const result = await execute({
      taskKey: 'triggerBatch',
      params: { batch: [{ channel, name: event, data: { test: 'some value' } }] },
      instanceHash
    })
    expect(result).toHaveProperty('message')
    expect(result.message).toBe('sent')
  })
})
