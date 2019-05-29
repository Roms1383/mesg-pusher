const Pusher = require('pusher')
module.exports = (input, { success, error }) => {
  try {
    const {
      name,
      channel = undefined,
      channels = undefined,
      data
    } = input
    const options = require('../options')(input)
    if (!channel && !channels) throw new Error(`parameters must contain either channel or channels`)
    const pusher = new Pusher(options)
    pusher.trigger(channel || channels, name, data)
    return success({ message: 'sent' })
  } catch (e) {
    console.error(e)
    return error({ error: e })
  }
}
