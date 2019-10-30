# mesg-pusher [![Latest Release](https://badgen.net/github/release/Roms1383/mesg-pusher)](https://www.npmjs.com/package/mesg-pusher) [![mesg-cli](https://img.shields.io/badge/mesg--cli-2.0.1-blueviolet.svg)](https://github.com/mesg-foundation/engine.git)  [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

[MESG](https://docs.mesg.com) Service for [Pusher](https://pusher.com/docs/server_api_guide)
ID: `com.mesg.pusher`

[![MESG](./logo-mesg.svg)](https://mesg.com/) | [![Pusher](./logo-pusher.svg)](https://pusher.com/)
--------------------------------------------- | ---------------------------------------------

## Contents

*   [Installation](#installation)
    *   [MESG SDK](#MESG-SDK)
    *   [Deploy the Service](#Service)
*   [Definitions](#Definitions)
    *   [Tasks](#Tasks)
        *   [trigger](#trigger)
        *   [triggerBatch](#triggerBatch)
        *   [channels](#channels)
        *   [channel](#channel)

# Installation

### MESG SDK

This service requires [MESG SDK](https://github.com/mesg-foundation/engine) to be installed first.

You can install MESG SDK by running the following command or [follow the installation guide](https://docs.mesg.com/guide/start-here/installation.html).

```bash
npm install -g mesg-cli
```

### Deploy the Service

To deploy this service, go to [this service page](https://marketplace.mesg.com/services/com.mesg.pusher) on the [MESG Marketplace](https://marketplace.mesg.com) and click the button "get/buy this service".

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
const { application } = require('mesg-js')
const mesg = application()
const Pusher = require('pusher-js')
const pusher = new Pusher('PUSHER_APP_KEY', { cluster: 'PUSHER_CLUSTER', forceTLS: true }) // replace with your credentials
const INSTANCE_HASH = await mesg.resolve('com.mesg.pusher')
const CHANNEL = 'some-channel'
const EVENT = 'some-event'
const CREDENTIALS = { appId: 'PUSHER_APP_ID', key: 'PUSHER_APP_KEY', secret: 'PUSHER_APP_SECRET' } // replace with your credentials
// subscribe to Pusher channel
const channel = pusher.subscribe(CHANNEL)
// on Pusher notification received
channel.bind(EVENT, data => {
  // example : launch MESG service trigger task
  mesg.executeTask({
    instanceHash: INSTANCE_HASH,
    taskKey: 'trigger',
    inputs: mesg.encodeData({ ...CREDENTIALS, channel: CHANNEL, event: EVENT, ...data })
  })
})
```

## Environment variables

Instead of providing Pusher credentials or options on each request, these can be provided via command line arguments or `.env` file, as shown below in [Integration tests](#integration-tests).

As usual, user inputs always takes precedence on defined environment variables.

| **Name** | **Enviroment Variable** |
| --- | --- |
| **appId** | `PUSHER_APP_ID` |
| **cluster** | `PUSHER_CLUSTER` |
| **useTLS** | `PUSHER_USE_TLS` |
| **host** | `PUSHER_HOST` |
| **keepAlive** | `PUSHER_KEEP_ALIVE` |
| **key** | `PUSHER_APP_KEY` |
| **port** | `PUSHER_PORT` |
| **proxy** | `PUSHER_PROXY` |
| **secret** | `PUSHER_APP_SECRET` |
| **timeout** | `PUSHER_TIMEOUT` |

## Integration tests

In order to launch them locally you will have to pass the environment variables along with your command, like so :

*   via command line arguments :
    ```bash
    mesg-cli service:dev --env PUSHER_APP_ID=... --env PUSHER_APP_KEY=... --env PUSHER_APP_SECRET=... --env PUSHER_CLUSTER=... --account ... --passphrase ...
    ```
*   via `.env` file :
    *   file
        ```
        PUSHER_APP_ID=...
        PUSHER_APP_KEY=...
        PUSHER_APP_SECRET=...
        PUSHER_CLUSTER=...
        MESG_ACCOUNT=...
        MESG_PASSPHRASE=...
        ```
    *   command
        ```bash
        source .env && mesg-cli service:dev --env   PUSHER_APP_ID=$PUSHER_APP_ID --env   PUSHER_APP_KEY=$PUSHER_APP_KEY --env   PUSHER_APP_SECRET=$PUSHER_APP_SECRET --env   PUSHER_CLUSTER=$PUSHER_CLUSTER --account $MESG_ACCOUNT   --passphrase $MESG_PASSPHRASE
        ```

***

## Definitions


### Tasks

<h4 id="trigger">trigger</h4>

Task key: `trigger`

triggers an event on one or more channels

##### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **appId** | `appId` | `String` | **`optional`** Pusher application ID |
| **key** | `key` | `String` | **`optional`** Pusher application key |
| **secret** | `secret` | `String` | **`optional`** Pusher application secret key |
| **useTLS** | `useTLS` | `Boolean` | **`optional`** whether to encrypt notification, defaults to false |
| **cluster** | `cluster` | `String` | **`optional`** if &#x60;host&#x60; is present, it will override the &#x60;cluster&#x60; option |
| **host** | `host` | `String` | **`optional`** whether to use a different host, defaults to api.pusherapp.com |
| **port** | `port` | `Number` | **`optional`** whether to use a different port, defaults to 80 for unuseTLS and 443 for useTLS |
| **proxy** | `proxy` | `String` | **`optional`** URL to proxy the requests through |
| **timeout** | `timeout` | `Number` | **`optional`** timeout for all requests in milliseconds |
| **keepAlive** | `keepAlive` | `Boolean` | **`optional`** enables keep-alive, defaults to false |
| **name** | `name` | `String` | event name |
| **data** | `data` | `Object` | event data (maximum 10Kb) |
| **channels** | `channels` | `Object` | **`optional`** array of one or more channel names - limited to 100 channels |
| **channel** | `channel` | `String` | **`optional`** channel name if publishing to a single channel (can be used instead of channels) |
| **socket_id** | `socket_id` | `Object` | **`optional`** excludes the event from being sent to a specific connection |
  
##### Outputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **message** | `message` | `String` | a dummy &#x27;sent&#x27; message |
<h4 id="triggerBatch">triggerBatch</h4>

Task key: `triggerBatch`

triggers multiple events in a single call (up to 10 per call on the multi-tenant clusters)

##### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **appId** | `appId` | `String` | **`optional`** Pusher application ID |
| **key** | `key` | `String` | **`optional`** Pusher application key |
| **secret** | `secret` | `String` | **`optional`** Pusher application secret key |
| **useTLS** | `useTLS` | `Boolean` | **`optional`** whether to encrypt notification, defaults to false |
| **cluster** | `cluster` | `String` | **`optional`** if &#x60;host&#x60; is present, it will override the &#x60;cluster&#x60; option |
| **host** | `host` | `String` | **`optional`** whether to use a different host, defaults to api.pusherapp.com |
| **port** | `port` | `Number` | **`optional`** whether to use a different port, defaults to 80 for unuseTLS and 443 for useTLS |
| **proxy** | `proxy` | `String` | **`optional`** URL to proxy the requests through |
| **timeout** | `timeout` | `Number` | **`optional`** timeout for all requests in milliseconds |
| **keepAlive** | `keepAlive` | `Boolean` | **`optional`** enables keep-alive, defaults to false |
| **batch** | `batch` | `Object` | array of events (maximum 10) |
  
##### Outputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **message** | `message` | `String` | a dummy &#x27;sent&#x27; message |
<h4 id="channels">channels</h4>

Task key: `channels`

get the list of the channel within an application that have active subscriptions (also referred to as being **occupied**)

##### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **appId** | `appId` | `String` | **`optional`** Pusher application ID |
| **key** | `key` | `String` | **`optional`** Pusher application key |
| **secret** | `secret` | `String` | **`optional`** Pusher application secret key |
| **useTLS** | `useTLS` | `Boolean` | **`optional`** whether to encrypt notification, defaults to false |
| **cluster** | `cluster` | `String` | **`optional`** if &#x60;host&#x60; is present, it will override the &#x60;cluster&#x60; option |
| **host** | `host` | `String` | **`optional`** whether to use a different host, defaults to api.pusherapp.com |
| **port** | `port` | `Number` | **`optional`** whether to use a different port, defaults to 80 for unuseTLS and 443 for useTLS |
| **proxy** | `proxy` | `String` | **`optional`** URL to proxy the requests through |
| **timeout** | `timeout` | `Number` | **`optional`** timeout for all requests in milliseconds |
| **keepAlive** | `keepAlive` | `Boolean` | **`optional`** enables keep-alive, defaults to false |
| **params** | `params` | `Object` | **`optional`** additional parameters to be sent as query string parameters (see [HTTP API Reference](https://pusher.com/docs/rest_api)) |
  
##### Outputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **channels** | `channels` | `String` | array of channel names |
<h4 id="channel">channel</h4>

Task key: `channel`

fetch one or some attributes for a given channel

##### Inputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **appId** | `appId` | `String` | **`optional`** Pusher application ID |
| **key** | `key` | `String` | **`optional`** Pusher application key |
| **secret** | `secret` | `String` | **`optional`** Pusher application secret key |
| **useTLS** | `useTLS` | `Boolean` | **`optional`** whether to encrypt notification, defaults to false |
| **cluster** | `cluster` | `String` | **`optional`** if &#x60;host&#x60; is present, it will override the &#x60;cluster&#x60; option |
| **host** | `host` | `String` | **`optional`** whether to use a different host, defaults to api.pusherapp.com |
| **port** | `port` | `Number` | **`optional`** whether to use a different port, defaults to 80 for unuseTLS and 443 for useTLS |
| **proxy** | `proxy` | `String` | **`optional`** URL to proxy the requests through |
| **timeout** | `timeout` | `Number` | **`optional`** timeout for all requests in milliseconds |
| **keepAlive** | `keepAlive` | `Boolean` | **`optional`** enables keep-alive, defaults to false |
| **params** | `params` | `Object` | **`optional`** additional parameters to be sent as query string parameters (see [HTTP API Reference](https://pusher.com/docs/rest_api)) |
  
##### Outputs

| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **occupied** | `occupied` | `Boolean` | whether the channel currently has active subscriptions |
| **user_count** | `user_count` | `Number` | **`optional`** number of distinct users currently subscribed to this channel (a single user may be subscribed many times, but will only count as one) |
| **subscription_count** | `subscription_count` | `Number` | **`optional`** number of connections currently subscribed to this channel (not available by default, has to be enabled in dashboard) |


