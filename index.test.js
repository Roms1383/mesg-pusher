const Client = require('pusher-js')
const MESG = require('mesg-js').application()
const serviceID = 'com.mesg.pusher'
const execute = async params => new Promise((resolve, reject) => MESG.executeTaskAndWaitResult(params)
.then(resolve)
.catch(reject))
describe('Tests', () => {
  const channel = 'continuous-integration'
  const event = 'some-event'
  beforeAll(() => {
    const client = new Client(process.env.PUSHER_APP_KEY, { cluster: process.env.PUSHER_CLUSTER, forceTLS: true })
    const subscription = client.subscribe(channel)
    subscription.bind(event)
  })
  it('channel', async () => {
    const definition = { serviceID, taskKey: 'channel' }
    const inputData = JSON.stringify({ name: channel })
    await execute({ ...definition, inputData })
    .then(({ outputData }) => JSON.parse(outputData))
    .then(outputData => {
      expect(outputData).toHaveProperty('occupied')
    })
  })
  it('channels', async () => {
    const definition = { serviceID, taskKey: 'channels' }
    const inputData = JSON.stringify({})
    await execute({ ...definition, inputData })
    .then(({ outputData }) => JSON.parse(outputData))
    .then(outputData => {
      expect(outputData).toHaveProperty('channels')
      expect(Array.isArray(outputData.channels)).toBe(true)
    })
  })
  it('trigger', async () => {
    const definition = { serviceID, taskKey: 'trigger' }
    const inputData = JSON.stringify({ name: event, channel, data: { test: 'some value' } })
    await execute({ ...definition, inputData })
    .then(({ outputData }) => JSON.parse(outputData))
    .then(outputData => {
      expect(outputData).toHaveProperty('message')
      expect(outputData.message).toBe('sent')
    })
  })
  it('triggerBatch', async () => {
    const definition = { serviceID, taskKey: 'triggerBatch' }
    const inputData = JSON.stringify({ batch: [{ channel, name: event, data: { test: 'some value' } }] })
    await execute({ ...definition, inputData })
    .then(({ outputData }) => JSON.parse(outputData))
    .then(outputData => {
      expect(outputData).toHaveProperty('message')
      expect(outputData.message).toBe('sent')
    })
  })
})
