const Pusher = require('pusher')
module.exports = (input) => {
  const {
    batch
  } = input
  const options = require('../options')(input)
  if (batch.length > 10) throw new Error('parameter batch can contain up to 10 events')
  const pusher = new Pusher(options)
  pusher.triggerBatch(batch)
  return { message: 'sent' }
}
