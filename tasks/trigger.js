const Pusher = require('pusher')
module.exports = (input) => {
  const {
    name,
    channel = undefined,
    channels = undefined,
    data
  } = input
  const options = require('../options')(input)
  if (!channel && !channels) throw new Error('parameters must contain either channel or channels')
  const pusher = new Pusher(options)
  pusher.trigger(channel || channels, name, data)
  return { message: 'sent' }
}
