# mesg-pusher

MESG Service for [Pusher](https://pusher.com/docs/server_api_guide)



# Tasks

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




