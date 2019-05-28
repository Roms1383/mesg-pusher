const Pusher = require('pusher')
module.exports = async (input, { success, error }) => {
  try {
    const {
      params = {}
    } = input
    const options = require('../options')(input)
    const pusher = new Pusher(options)
    const channels = await pusher.get({ path: '/channels', params }) || []
    return success({ channels })
  } catch (e) {
    console.error(e)
    return error({ error: e })
  }
}
