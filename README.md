# mesg-pusher [![mesg-pusher](https://img.shields.io/badge/version-1.0.11-blue.svg)](https://github.com/Roms1383/mesg-pusher.git) [![Build Status](https://travis-ci.com/Roms1383/mesg-pusher.svg?branch=master)](https://travis-ci.com/Roms1383/mesg-pusher) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

[MESG](https://docs.mesg.com) Service for [Pusher](https://pusher.com/docs/server_api_guide)

[![MESG](./logo-mesg.svg)](https://mesg.com/) | [![Pusher](./logo-pusher.svg)](https://pusher.com/)
--------------------------------------------- | ---------------------------------------------

# Features

Currently able to use `Pusher` [channels](https://pusher.com/docs/server_api_guide/interact_rest_api#application-channels), [channel](https://pusher.com/docs/server_api_guide/interact_rest_api#channel-information), [trigger](https://pusher.com/docs/server_api_guide/interact_rest_api#publishing-events) and [triggerBatch](https://pusher.com/docs/server_api_guide/interact_rest_api#publishing-batches-of-events) features from `MESG`.

# Use case

`MESG Applications` on different servers communicating together over `Pusher` notifications.

## Example

1.  on `MESG Application` on a server `A` : use this `MESG Service` to send notifications over `Pusher`.

2.  on `MESG Application` on a server `B` : listen to the notifications emitted by `MESG Application` on a server `A` over `Pusher`.

# How to listen in a `MESG Application`

Install `MESG` and `Pusher` dependencies :

```shell
yarn add mesg-js pusher-js
```

Create a socket connection to listen and react to `Pusher` notifications :

```js
// in a MESG Application
const MESG = require('mesg-js').application()
const Pusher = require('pusher-js')
const pusher = new Pusher('KEY', { cluster: 'CLUSTER', forceTLS: true }) // replace with your credentials
const CHANNEL = 'some-channel'
const EVENT = 'some-event'
const channel = pusher.subscribe(CHANNEL)
// on Pusher notification received
channel.bind(EVENT, data => {
  // example : launch some task
  MESG.api.ExecuteTask({
    serviceID: 'SOME_LOCAL_MESG_SERVICE_ID',
    taskKey: 'some-task',
    inputData: JSON.stringify(Object.assign({}, { channel: CHANNEL, event: EVENT }, data) })
  }, (err, reply) => {
    // handle response if needed
  })
})
```

# Tasks

## channel

Task key: `channel`

fetch one or some attributes for a given channel

### Inputs

| **Key** | **Type** | **Description** |
| --- | --- | --- |
| **appId** | `String` | Pusher application ID |
| **cluster** | `String` | if `host` is present, it will override the `cluster` option |
| **encrypted** | `Boolean` | whether to encrypt notification, defaults to false |
| **host** | `String` | whether to use a different host, defaults to api.pusherapp.com |
| **keepAlive** | `Boolean` | enables keep-alive, defaults to false |
| **key** | `String` | Pusher application key |
| **params** | `Object` | additional parameters to be sent as query string parameters (see [HTTP API Reference](https://pusher.com/docs/rest_api)) |
| **port** | `Number` | whether to use a different port, defaults to 80 for unencrypted and 443 for encrypted |
| **proxy** | `String` | URL to proxy the requests through, defaults to 80 for unencrypted and 443 for encrypted |
| **secret** | `String` | Pusher application secret key |
| **timeout** | `Number` | timeout for all requests in milliseconds |


### Outputs

##### error

Output key: `error`



| **Key** | **Type** | **Description** |
| --- | --- | --- |
| **error** | `String` | error |

##### success

Output key: `success`



| **Key** | **Type** | **Description** |
| --- | --- | --- |
| **occupied** | `Boolean` | whether the channel currently has active subscriptions |
| **subscription_count** | `Number` | number of connections currently subscribed to this channel (not available by default, has to be enabled in dashboard) |
| **user_count** | `Number` | number of distinct users currently subscribed to this channel (a single user may be subscribed many times, but will only count as one) |




## channels

Task key: `channels`

get the list of the channel within an application that have active subscriptions (also referred to as being **occupied**)

### Inputs

| **Key** | **Type** | **Description** |
| --- | --- | --- |
| **appId** | `String` | Pusher application ID |
| **cluster** | `String` | if `host` is present, it will override the `cluster` option |
| **encrypted** | `Boolean` | whether to encrypt notification, defaults to false |
| **host** | `String` | whether to use a different host, defaults to api.pusherapp.com |
| **keepAlive** | `Boolean` | enables keep-alive, defaults to false |
| **key** | `String` | Pusher application key |
| **params** | `Object` | additional parameters to be sent as query string parameters (see [HTTP API Reference](https://pusher.com/docs/rest_api)) |
| **port** | `Number` | whether to use a different port, defaults to 80 for unencrypted and 443 for encrypted |
| **proxy** | `String` | URL to proxy the requests through, defaults to 80 for unencrypted and 443 for encrypted |
| **secret** | `String` | Pusher application secret key |
| **timeout** | `Number` | timeout for all requests in milliseconds |


### Outputs

##### error

Output key: `error`



| **Key** | **Type** | **Description** |
| --- | --- | --- |
| **error** | `String` | error |

##### success

Output key: `success`



| **Key** | **Type** | **Description** |
| --- | --- | --- |
| **channels** | `Object` | array of channel names |




## trigger

Task key: `trigger`

triggers an event on one or more channels

### Inputs

| **Key** | **Type** | **Description** |
| --- | --- | --- |
| **appId** | `String` | Pusher application ID |
| **channel** | `String` | channel name if publishing to a single channel (can be used instead of channels) |
| **channels** | `Object` | array of one or more channel names - limited to 100 channels |
| **cluster** | `String` | if `host` is present, it will override the `cluster` option |
| **data** | `Object` | event data (maximum 10Kb) |
| **encrypted** | `Boolean` | whether to encrypt notification, defaults to false |
| **host** | `String` | whether to use a different host, defaults to api.pusherapp.com |
| **keepAlive** | `Boolean` | enables keep-alive, defaults to false |
| **key** | `String` | Pusher application key |
| **name** | `String` | event name |
| **port** | `Number` | whether to use a different port, defaults to 80 for unencrypted and 443 for encrypted |
| **proxy** | `String` | URL to proxy the requests through, defaults to 80 for unencrypted and 443 for encrypted |
| **secret** | `String` | Pusher application secret key |
| **socket_id** | `Object` | excludes the event from being sent to a specific connection |
| **timeout** | `Number` | timeout for all requests in milliseconds |


### Outputs

##### error

Output key: `error`



| **Key** | **Type** | **Description** |
| --- | --- | --- |
| **error** | `String` | error |

##### success

Output key: `success`



| **Key** | **Type** | **Description** |
| --- | --- | --- |
| **message** | `String` | a dummy &#39;sent&#39; message |




## triggerBatch

Task key: `triggerBatch`

triggers multiple events in a single call (up to 10 per call on the multi-tenant clusters)

### Inputs

| **Key** | **Type** | **Description** |
| --- | --- | --- |
| **appId** | `String` | Pusher application ID |
| **batch** | `Object` | array of events (maximum 10) |
| **cluster** | `String` | if `host` is present, it will override the `cluster` option |
| **encrypted** | `Boolean` | whether to encrypt notification, defaults to false |
| **host** | `String` | whether to use a different host, defaults to api.pusherapp.com |
| **keepAlive** | `Boolean` | enables keep-alive, defaults to false |
| **key** | `String` | Pusher application key |
| **port** | `Number` | whether to use a different port, defaults to 80 for unencrypted and 443 for encrypted |
| **proxy** | `String` | URL to proxy the requests through, defaults to 80 for unencrypted and 443 for encrypted |
| **secret** | `String` | Pusher application secret key |
| **timeout** | `Number` | timeout for all requests in milliseconds |


### Outputs

##### error

Output key: `error`



| **Key** | **Type** | **Description** |
| --- | --- | --- |
| **error** | `String` | error |

##### success

Output key: `success`



| **Key** | **Type** | **Description** |
| --- | --- | --- |
| **message** | `String` | a dummy &#39;sent&#39; message |




