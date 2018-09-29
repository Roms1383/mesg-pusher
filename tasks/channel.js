/* eslint-disable camelcase */
const Pusher = require('pusher')
module.exports = async (input, { success, error }) => {
  try {
    const {
      name,
      params = {}
    } = input
    const options = require('../options')(input)
    const pusher = new Pusher(options)
    const { occupied = false, user_count = undefined, subscription_count = undefined } = await pusher.get({ path: `/channels/${name}`, params }) || {}
    return success({ occupied, user_count, subscription_count })
  } catch (e) {
    console.error(e)
    return error(e)
  }
}
