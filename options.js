module.exports = ({
  appId,
  key,
  secret,
  encrypted = false,
  cluster = undefined,
  host = undefined,
  port = undefined,
  proxy = undefined,
  timeout = undefined,
  keepAlive = false
}) => {
  const options = { appId, key, secret, encrypted, keepAlive }
  if (!cluster && !host) throw new Error(`options must contain either cluster or host`)
  if (cluster) options.cluster = cluster
  if (host) options.host = host
  if (!port) options.port = encrypted ? 443 : 80
  if (proxy) options.proxy = proxy
  if (timeout) options.timeout = timeout
  return options
}
