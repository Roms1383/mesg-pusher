const Pusher = require('pusher')
module.exports = async input => {
  const {
    params = {}
  } = input
  const options = require('../options')(input)
  const pusher = new Pusher(options)
  const channels = await pusher.get({ path: '/channels', params }) || []
  return { channels }
}
