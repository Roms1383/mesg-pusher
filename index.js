const MESG = require('mesg-js').service()
const tasks = require('./tasks')
MESG.listenTask(tasks)

// in a MESG application
/**
const Pusher = require('pusher-js')
const pusher = new Pusher('KEY', { cluster: 'CLUSTER', forceTLS: true })
const CHANNEL = 'some-channel'
const EVENT = 'some-event'
const channel = pusher.subscribe(CHANNEL)
channel.bind(EVENT, data => { MESG.emitEvent('received', { channel: CHANNEL, event: EVENT, ...data })
 */
