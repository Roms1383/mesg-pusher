# mesg-pusher [![mesg-pusher](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/Roms1383/mesg-pusher.git) [![Build Status](https://travis-ci.com/Roms1383/mesg-pusher.svg?branch=master)](https://travis-ci.com/Roms1383/mesg-pusher) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

MESG Service for [Pusher](https://pusher.com/docs/server_api_guide)

![MESG](./logo-mesg.svg) | ![Pusher](./logo-pusher.svg)
------------------------ | ------------------------------


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
| **error** | `String` |  |

##### success

Output key: `success`



| **Key** | **Type** | **Description** |
| --- | --- | --- |
| **occupied** | `Boolean` |  |
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
| **error** | `String` |  |

##### success

Output key: `success`



| **Key** | **Type** | **Description** |
| --- | --- | --- |
| **channels** | `Object` |  |




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
| **error** | `String` |  |

##### success

Output key: `success`



| **Key** | **Type** | **Description** |
| --- | --- | --- |
| **message** | `String` |  |




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
| **error** | `String` |  |

##### success

Output key: `success`



| **Key** | **Type** | **Description** |
| --- | --- | --- |
| **message** | `String` |  |




