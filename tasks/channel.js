/* eslint-disable camelcase */
const Pusher = require('pusher')
module.exports = async input => {
  const {
    name,
    params = {}
  } = input
  const options = require('../options')(input)
  const pusher = new Pusher(options)
  const { occupied = false, user_count = 0, subscription_count = 0 } = await pusher.get({ path: `/channels/${name}`, params }) || {}
  return { occupied, user_count: +user_count, subscription_count: +subscription_count }
}
