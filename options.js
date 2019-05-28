const yn = require('yn')
module.exports = ({
  appId = process.env.PUSHER_APP_ID,
  key = process.env.PUSHER_APP_KEY,
  secret = process.env.PUSHER_APP_SECRET,
  useTLS = yn(process.env.PUSHER_USE_TLS, { default: false }),
  cluster = process.env.PUSHER_CLUSTER || undefined,
  host = process.env.PUSHER_HOST || undefined,
  port = process.env.PUSHER_PORT || undefined,
  proxy = process.env.PUSHER_PROXY || undefined,
  timeout = process.env.PUSHER_TIMEOUT || undefined,
  keepAlive = yn(process.env.PUSHER_KEEP_ALIVE, { default: false })
}) => {
  const options = { appId, key, secret, useTLS, keepAlive }
  if (!appId) throw new Error(`options must contain application ID`)
  if (!key) throw new Error(`options must contain application key`)
  if (!secret) throw new Error(`options must contain application secret key`)
  if (!cluster && !host) throw new Error(`options must contain either cluster or host`)
  if (cluster) options.cluster = cluster
  if (host) options.host = host
  if (!port) options.port = useTLS ? 443 : 80
  if (proxy) options.proxy = proxy
  if (timeout) options.timeout = timeout
  return options
}
