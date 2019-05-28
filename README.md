# mesg-pusher [![mesg-pusher](https://img.shields.io/badge/version-1.0.14-blue.svg)](https://github.com/Roms1383/mesg-pusher.git) [![mesg-core](https://img.shields.io/badge/mesg--core-0.9-blueviolet.svg)](https://github.com/mesg-foundation/engine.git) [![Build Status](https://travis-ci.com/Roms1383/mesg-pusher.svg?branch=master)](https://travis-ci.com/Roms1383/mesg-pusher) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

[MESG](https://docs.mesg.com) Service for [Pusher](https://pusher.com/docs/server_api_guide)

[![MESG](./logo-mesg.svg)](https://mesg.com/) | [![Pusher](./logo-pusher.svg)](https://pusher.com/)
--------------------------------------------- | ---------------------------------------------

# Contents

- [Installation](#Installation)
- [Features](#Features)
- [Definitions](#Definitions)
  
  - [Tasks](#Tasks)
    - [channel](#channel)
    - [channels](#channels)
    - [trigger](#trigger)
    - [triggerBatch](#triggerbatch)

# Installation

## MESG Core

This service requires [MESG Core](https://github.com/mesg-foundation/core) to be installed first.

You can install MESG Core by running the following command or [follow the installation guide](https://docs.mesg.com/guide/start-here/installation.html).

```bash
bash <(curl -fsSL https://mesg.com/install)
```

## Service

```bash
mesg-core service deploy https://github.com/Roms1383/mesg-pusher
```

# Features

Currently able to use `Pusher` [channels](https://pusher.com/docs/server_api_guide/interact_rest_api#application-channels), [channel](https://pusher.com/docs/server_api_guide/interact_rest_api#channel-information), [trigger](https://pusher.com/docs/server_api_guide/interact_rest_api#publishing-events) and [triggerBatch](https://pusher.com/docs/server_api_guide/interact_rest_api#publishing-batches-of-events) features from `MESG`.

## Use case

`MESG Applications` on different servers communicating together over `Pusher` notifications.

### Example

1.  on `MESG Application` on a server `A` : use this `MESG Service` to send notifications over `Pusher`.

2.  on `MESG Application` on a server `B` : listen to the notifications emitted by `MESG Application` on a server `A` over `Pusher`.

## How to listen in a `MESG Application`

Install `MESG` and `Pusher` dependencies :

```shell
yarn add mesg-js pusher-js
```

Create a socket connection to listen and react to `Pusher` notifications :

```js
// in a MESG Application
const MESG = require('mesg-js').application()
const Pusher = require('pusher-js')
const pusher = new Pusher('PUSHER_APP_KEY', { cluster: 'PUSHER_CLUSTER', forceTLS: true }) // replace with your credentials
const CHANNEL = 'some-channel'
const EVENT = 'some-event'
const channel = pusher.subscribe(CHANNEL)
const CREDENTIALS = { appId: 'PUSHER_APP_ID', key: 'PUSHER_APP_KEY', secret: 'PUSHER_APP_SECRET' } // replace with your credentials
// on Pusher notification received
channel.bind(EVENT, data => {
  // example : launch MESG service trigger task
  MESG.api.ExecuteTask({
    serviceID: 'com.mesg.pusher',
    taskKey: 'trigger',
    inputData: JSON.stringify({ ...CREDENTIALS, channel: CHANNEL, event: EVENT, ...data })
  }, (err, reply) => {
    // handle response if needed
  })
})
```

## Environment variables

Instead of providing Pusher credentials or options on each request
e.g.
```js
...
const CREDENTIALS = { appId: 'PUSHER_APP_ID', key: 'PUSHER_APP_KEY', secret: 'PUSHER_APP_SECRET' } // replace with your credentials
MESG.api.ExecuteTask({
  serviceID: 'com.mesg.pusher',
  taskKey: 'trigger',
  inputData: JSON.stringify({ ...CREDENTIALS, channel: CHANNEL, event: EVENT, ...data })
}, (err, reply) => {
  // ...
})
...
```
These can be defined when deploying the service as environment variables :
```sh
mesg-core service deploy . --env PUSHER_APP_ID=YOUR_PUSHER_APP_ID --env PUSHER_APP_SECRET=YOUR_PUSHER_APP_SECRET --env PUSHER_APP_KEY=YOUR_PUSHER_APP_KEY
```

As usual, user inputs always takes precedence on defined environment variables.

| **Name** | **Enviroment Variable** |
| --- | --- |
| **appId** | `PUSHER_APP_ID` |
| **cluster** | `PUSHER_CLUSTER` |
| **encrypted** | `PUSHER_ENCRYPTED` |
| **host** | `PUSHER_HOST` |
| **keepAlive** | `PUSHER_KEEPALIVE` |
| **key** | `PUSHER_APP_KEY` |
| **port** | `PUSHER_PORT` |
| **proxy** | `PUSHER_PROXY` |
| **secret** | `PUSHER_APP_SECRET` |
| **timeout** | `PUSHER_TIMEOUT` |

***

# Definitions


# Tasks

## channel

Task key: `channel`

fetch one or some attributes for a given channel

### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **appId** | `appId` | `String` | **`optional`** Pusher application ID |
| **cluster** | `cluster` | `String` | **`optional`** if `host` is present, it will override the `cluster` option |
| **encrypted** | `encrypted` | `Boolean` | **`optional`** whether to encrypt notification, defaults to false |
| **host** | `host` | `String` | **`optional`** whether to use a different host, defaults to api.pusherapp.com |
| **keepAlive** | `keepAlive` | `Boolean` | **`optional`** enables keep-alive, defaults to false |
| **key** | `key` | `String` | **`optional`** Pusher application key |
| **params** | `params` | `Object` | **`optional`** additional parameters to be sent as query string parameters (see [HTTP API Reference](https://pusher.com/docs/rest_api)) |
| **port** | `port` | `Number` | **`optional`** whether to use a different port, defaults to 80 for unencrypted and 443 for encrypted |
| **proxy** | `proxy` | `String` | **`optional`** URL to proxy the requests through |
| **secret** | `secret` | `String` | **`optional`** Pusher application secret key |
| **timeout** | `timeout` | `Number` | **`optional`** timeout for all requests in milliseconds |

### Outputs

#### error

Output key: `error`



| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **error** | `error` | `String` | error |

#### success

Output key: `success`



| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **occupied** | `occupied` | `Boolean` | whether the channel currently has active subscriptions |
| **subscription_count** | `subscription_count` | `Number` | **`optional`** number of connections currently subscribed to this channel (not available by default, has to be enabled in dashboard) |
| **user_count** | `user_count` | `Number` | **`optional`** number of distinct users currently subscribed to this channel (a single user may be subscribed many times, but will only count as one) |


## channels

Task key: `channels`

get the list of the channel within an application that have active subscriptions (also referred to as being **occupied**)

### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **appId** | `appId` | `String` | **`optional`** Pusher application ID |
| **cluster** | `cluster` | `String` | **`optional`** if `host` is present, it will override the `cluster` option |
| **encrypted** | `encrypted` | `Boolean` | **`optional`** whether to encrypt notification, defaults to false |
| **host** | `host` | `String` | **`optional`** whether to use a different host, defaults to api.pusherapp.com |
| **keepAlive** | `keepAlive` | `Boolean` | **`optional`** enables keep-alive, defaults to false |
| **key** | `key` | `String` | **`optional`** Pusher application key |
| **params** | `params` | `Object` | **`optional`** additional parameters to be sent as query string parameters (see [HTTP API Reference](https://pusher.com/docs/rest_api)) |
| **port** | `port` | `Number` | **`optional`** whether to use a different port, defaults to 80 for unencrypted and 443 for encrypted |
| **proxy** | `proxy` | `String` | **`optional`** URL to proxy the requests through |
| **secret** | `secret` | `String` | **`optional`** Pusher application secret key |
| **timeout** | `timeout` | `Number` | **`optional`** timeout for all requests in milliseconds |

### Outputs

#### error

Output key: `error`



| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **error** | `error` | `String` | error |

#### success

Output key: `success`



| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **channels** | `channels` | `Object` | array of channel names |


## trigger

Task key: `trigger`

triggers an event on one or more channels

### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **appId** | `appId` | `String` | **`optional`** Pusher application ID |
| **channel** | `channel` | `String` | **`optional`** channel name if publishing to a single channel (can be used instead of channels) |
| **channels** | `channels` | `Object` | **`optional`** array of one or more channel names - limited to 100 channels |
| **cluster** | `cluster` | `String` | **`optional`** if `host` is present, it will override the `cluster` option |
| **data** | `data` | `Object` | event data (maximum 10Kb) |
| **encrypted** | `encrypted` | `Boolean` | **`optional`** whether to encrypt notification, defaults to false |
| **host** | `host` | `String` | **`optional`** whether to use a different host, defaults to api.pusherapp.com |
| **keepAlive** | `keepAlive` | `Boolean` | **`optional`** enables keep-alive, defaults to false |
| **key** | `key` | `String` | **`optional`** Pusher application key |
| **name** | `name` | `String` | event name |
| **port** | `port` | `Number` | **`optional`** whether to use a different port, defaults to 80 for unencrypted and 443 for encrypted |
| **proxy** | `proxy` | `String` | **`optional`** URL to proxy the requests through |
| **secret** | `secret` | `String` | **`optional`** Pusher application secret key |
| **socket_id** | `socket_id` | `Object` | **`optional`** excludes the event from being sent to a specific connection |
| **timeout** | `timeout` | `Number` | **`optional`** timeout for all requests in milliseconds |

### Outputs

#### error

Output key: `error`



| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **error** | `error` | `String` | error |

#### success

Output key: `success`



| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **message** | `message` | `String` | a dummy 'sent' message |


## triggerBatch

Task key: `triggerBatch`

triggers multiple events in a single call (up to 10 per call on the multi-tenant clusters)

### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **appId** | `appId` | `String` | **`optional`** Pusher application ID |
| **batch** | `batch` | `Object` | array of events (maximum 10) |
| **cluster** | `cluster` | `String` | **`optional`** if `host` is present, it will override the `cluster` option |
| **encrypted** | `encrypted` | `Boolean` | **`optional`** whether to encrypt notification, defaults to false |
| **host** | `host` | `String` | **`optional`** whether to use a different host, defaults to api.pusherapp.com |
| **keepAlive** | `keepAlive` | `Boolean` | **`optional`** enables keep-alive, defaults to false |
| **key** | `key` | `String` | **`optional`** Pusher application key |
| **port** | `port` | `Number` | **`optional`** whether to use a different port, defaults to 80 for unencrypted and 443 for encrypted |
| **proxy** | `proxy` | `String` | **`optional`** URL to proxy the requests through |
| **secret** | `secret` | `String` | **`optional`** Pusher application secret key |
| **timeout** | `timeout` | `Number` | **`optional`** timeout for all requests in milliseconds |

### Outputs

#### error

Output key: `error`



| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **error** | `error` | `String` | error |

#### success

Output key: `success`



| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **message** | `message` | `String` | a dummy 'sent' message |


