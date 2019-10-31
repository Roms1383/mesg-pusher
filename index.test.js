require('dotenv').config()
const Client = require('pusher-js')
const MESG = require('mesg-js').application()
const execute = async params => new Promise((resolve, reject) => MESG.executeTaskAndWaitResult(params)
.then(resolve)
.catch(reject))
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
    const inputs = MESG.encodeData({ name: channel })
    await execute({ taskKey: 'channel', inputs, instanceHash })
    .then(({ outputs }) => MESG.decodeData(outputs))
    .then(outputs => {
      expect(outputs).toHaveProperty('occupied')
      expect(outputs).toHaveProperty('user_count')
      expect(outputs).toHaveProperty('subscription_count')
    })
  })
  it('channels', async () => {
    const inputs = MESG.encodeData({})
    await execute({ taskKey: 'channels', inputs, instanceHash })
    .then(({ outputs }) => MESG.decodeData(outputs))
    .then(outputs => {
      expect(outputs).toHaveProperty('channels')
      expect(Array.isArray(outputs.channels)).toBe(true)
    })
  })
  it('trigger', async () => {
    const inputs = MESG.encodeData({ name: event, channel, data: { test: 'some value' } })
    await execute({ taskKey: 'trigger', inputs, instanceHash })
    .then(({ outputs }) => MESG.decodeData(outputs))
    .then(outputs => {
      expect(outputs).toHaveProperty('message')
      expect(outputs.message).toBe('sent')
    })
  })
  it('triggerBatch', async () => {
    const inputs = MESG.encodeData({ batch: [{ channel, name: event, data: { test: 'some value' } }] })
    await execute({ taskKey: 'triggerBatch', inputs, instanceHash })
    .then(({ outputs }) => MESG.decodeData(outputs))
    .then(outputs => {
      expect(outputs).toHaveProperty('message')
      expect(outputs.message).toBe('sent')
    })
  })
})
