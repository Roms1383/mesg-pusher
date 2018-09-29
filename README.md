# mesg-pusher [![mesg-pusher](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/Roms1383/mesg-pusher.git) [![Build Status](https://travis-ci.com/Roms1383/mesg-pusher.svg?branch=master)](https://travis-ci.com/Roms1383/mesg-pusher) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

MESG Service for [Pusher](https://pusher.com/docs/server_api_guide)

<div width="100%"><svg viewBox="0 0 376 100" xmlns="http://www.w3.org/2000/svg" style="enable-background:new 0 0 376 100" width="20%" x="0px" xml:space="preserve" xmlns:xlink="http://www.w3.org/1999/xlink" y="0px" class="logo" data-v-1a9bb128="" data-v-b441d17a="" mb2=""><g id="Logo" data-v-b441d17a=""><g id="Brandmark" data-v-b441d17a=""><path d="M51.3,20.7c4.3,0,7.8,3.5,7.8,7.8s-3.5,7.8-7.8,7.8s-7.8-3.5-7.8-7.8S47,20.7,51.3,20.7z
			 M73.9,37.1c4.3,0,7.8,3.5,7.8,7.8s-3.5,7.8-7.8,7.8c-4.3,0-7.8-3.5-7.8-7.8S69.6,37.1,73.9,37.1z M37.3,63.7
			c4.3,0,7.8,3.5,7.8,7.8c0,4.3-3.5,7.8-7.8,7.8s-7.8-3.5-7.8-7.8C29.5,67.2,33,63.7,37.3,63.7z M65.2,63.7c4.3,0,7.8,3.5,7.8,7.8
			c0,4.3-3.5,7.8-7.8,7.8s-7.8-3.5-7.8-7.8C57.4,67.2,60.9,63.7,65.2,63.7z M28.7,37.1c4.3,0,7.8,3.5,7.8,7.8s-3.5,7.8-7.8,7.8
			s-7.8-3.5-7.8-7.8S24.3,37.1,28.7,37.1z" class="st0" id="CORES" data-v-b441d17a=""></path><path d="M73.9,53.9c-4.9,0-8.9-4-8.9-8.9c0-3.4,1.9-6.3,4.6-7.8c-2.5-3-5.8-5.4-9.5-6.9
			c-0.8,4.1-4.4,7.3-8.8,7.3s-8-3.1-8.8-7.3c-3.7,1.5-7,3.9-9.5,6.9c2.8,1.5,4.6,4.5,4.6,7.8c0,4.9-4,8.9-8.9,8.9
			c-0.4,0-0.7,0-1.1-0.1c0.2,4.1,1.5,7.9,3.6,11.2c1.6-1.5,3.7-2.4,6.1-2.4c4.9,0,8.9,4,8.9,8.9c0,1.3-0.3,2.6-0.9,3.8
			c1.9,0.5,3.9,0.7,5.9,0.7c2,0,4-0.2,5.9-0.7c-0.6-1.2-0.9-2.5-0.9-3.8c0-4.9,4-8.9,8.9-8.9c2.4,0,4.5,0.9,6.1,2.4
			c2.1-3.3,3.4-7.1,3.6-11.2C74.6,53.8,74.2,53.9,73.9,53.9z M102.4,44.9c0-14.6-11-26.7-25.2-28.3C72.6,6.8,62.7,0,51.3,0
			C39.8,0,29.9,6.8,25.4,16.6C11.2,18.2,0.2,30.3,0.2,44.9c0,8.3,3.6,15.7,9.2,21c-0.4,1.8-0.6,3.7-0.6,5.6
			c0,15.7,12.8,28.5,28.5,28.5c5.1,0,9.8-1.3,14-3.7c4.1,2.3,8.9,3.7,14,3.7c15.7,0,28.5-12.8,28.5-28.5c0-1.9-0.2-3.8-0.6-5.6
			C98.8,60.7,102.4,53.2,102.4,44.9z M92.9,64.6c-1.6-6.5-5.5-12.2-10.8-16.1c-0.2,0.4-0.3,0.7-0.5,1c5.1,3.8,8.9,9.4,10.4,15.9
			c-4.8,4.2-11,6.7-17.8,6.8c0,0.4-0.1,0.8-0.2,1.2c6.9,0,13.3-2.5,18.2-6.7c0.3,1.5,0.4,3.1,0.4,4.8c0,15.1-12.3,27.4-27.4,27.4
			c-4.6,0-9-1.2-12.8-3.2c5.6-3.5,9.9-8.9,11.9-15.2c-0.4,0-0.8-0.1-1.1-0.2c-2.1,6.2-6.4,11.5-11.9,14.8
			c-5.6-3.3-9.9-8.6-11.9-14.8c-0.4,0.1-0.7,0.2-1.1,0.2c2.1,6.4,6.4,11.7,11.9,15.2c-3.8,2-8.2,3.2-12.8,3.2
			c-15.1,0-27.4-12.3-27.4-27.4c0-1.6,0.1-3.2,0.4-4.8c4.9,4.1,11.3,6.7,18.2,6.7c-0.1-0.4-0.1-0.7-0.2-1.2
			c-6.8-0.1-13-2.6-17.8-6.8C12.1,59,15.9,53.4,21,49.5c-0.2-0.3-0.4-0.7-0.5-1c-5.3,3.9-9.2,9.5-10.8,16.1
			c-5.1-5-8.3-11.9-8.3-19.7c0-13.8,10.3-25.2,23.5-27.1c-1.3,3.3-2.1,6.9-2.1,10.7c0,3,0.5,5.9,1.3,8.7c0.3-0.2,0.7-0.4,1-0.5
			c-0.8-2.6-1.3-5.3-1.3-8.2c0-3.9,0.8-7.5,2.2-10.8c0.8-0.1,1.7-0.1,2.5-0.1c5.9,0,11.4,1.9,15.9,5.1c0.2-0.3,0.5-0.6,0.8-0.8
			c-4.7-3.4-10.4-5.4-16.7-5.4c-0.7,0-1.3,0-2,0.1C31.1,7.4,40.4,1.2,51.2,1.2c10.8,0,20.1,6.3,24.6,15.3c-0.7-0.1-1.3-0.1-2-0.1
			c-6.2,0-12,2-16.7,5.4c0.3,0.2,0.6,0.5,0.8,0.8c4.5-3.2,9.9-5.1,15.9-5.1c0.9,0,1.7,0.1,2.5,0.1c1.4,3.3,2.2,7,2.2,10.8
			c0,2.8-0.4,5.6-1.3,8.2c0.4,0.2,0.7,0.3,1,0.5c0.9-2.8,1.3-5.7,1.3-8.7c0-3.8-0.7-7.4-2.1-10.7c13.3,1.9,23.5,13.3,23.5,27.1
			C101.2,52.6,98,59.6,92.9,64.6z" class="st1" id="Circles" data-v-b441d17a=""></path></g><path d="M182.6,18.8c-1-1-2.2-1.5-3.6-1.5c-1.7,0-3.2,0.8-4.3,2.3l-21.2,31.7l-21-31.7
		c-0.5-0.7-1.2-1.3-2-1.7c-0.8-0.4-1.7-0.6-2.5-0.6c-1.5,0-2.8,0.5-3.7,1.6c-1,1-1.5,2.2-1.5,3.6v55.1c0,1.5,0.4,2.7,1.3,3.7
		c0.9,1,2.1,1.5,3.5,1.5c1.5,0,2.7-0.5,3.6-1.5c0.9-1,1.3-2.2,1.3-3.7V37.1L149,62.6c0.5,0.6,1.1,1.2,1.8,1.6
		c0.7,0.4,1.5,0.6,2.3,0.6c0.8,0.1,1.6-0.1,2.3-0.6c0.7-0.4,1.3-0.9,1.9-1.6l16.2-24.6v39.6c0,1.5,0.5,2.7,1.5,3.7
		c1,1,2.3,1.5,3.8,1.5c1.5,0,2.8-0.5,3.8-1.5c1-1,1.5-2.2,1.5-3.6V22.4C184.1,20.9,183.6,19.7,182.6,18.8L182.6,18.8z M241.4,27.3
		c1.5,0,2.7-0.4,3.7-1.3c1-0.9,1.5-2.1,1.5-3.5c0-1.5-0.5-2.7-1.5-3.7c-1-0.9-2.2-1.4-3.7-1.4h-31.7c-1.4,0-2.6,0.5-3.7,1.5
		c-1,1-1.5,2.2-1.5,3.7v55c0,1.4,0.5,2.6,1.5,3.7c1,1,2.2,1.5,3.7,1.5h31.7c1.5,0,2.7-0.4,3.7-1.3c1-0.9,1.5-2.1,1.5-3.5
		c0-1.3-0.5-2.6-1.5-3.6l0,0c-1-1-2.2-1.5-3.7-1.5h-26.3V54.2h22.2c1.5,0,2.7-0.4,3.7-1.3c1-0.9,1.5-2.1,1.5-3.6
		c0-1.4-0.5-2.6-1.5-3.6c-1-0.9-2.2-1.4-3.7-1.4h-22.2v-17L241.4,27.3L241.4,27.3z M296.5,48.4c-3.1-1.4-7-2.7-11.8-3.7
		c-4.6-1.1-8.1-2.4-10.4-3.9c-2.2-1.4-3.2-3.5-3.2-6.2c0-2.5,1.1-4.4,3.2-5.9c2.3-1.6,5.4-2.4,9.3-2.4c2.5,0,5,0.5,7.7,1.6
		c2.7,1,4.8,2.3,6.3,3.9c0.7,0.6,1.6,0.9,2.6,0.9c1.4,0,2.6-0.5,3.5-1.5s1.5-2.1,1.5-3.5c0-1.6-0.8-3.1-2.3-4.5
		c-2.1-2.1-5-3.7-8.4-5c-3.4-1.2-7.1-1.9-10.9-1.9c-4.3,0-8.2,0.8-11.6,2.3c-3.5,1.5-6.2,3.7-8.2,6.5c-2,2.8-3,6.1-3,9.9
		c0,5.4,1.8,9.7,5.3,12.7c3.5,3,8.4,5.2,14.8,6.5c5.1,1.1,9,2.5,11.5,4.2c2.4,1.6,3.6,3.8,3.6,6.7c0,2.4-1.2,4.4-3.6,6
		c-2.5,1.7-5.6,2.5-9.3,2.5c-3.2,0-6-0.5-8.5-1.5c-2.5-1-4.9-2.6-7.3-4.8c-0.9-0.8-2-1.2-3.2-1.2c-1.4,0-2.6,0.5-3.6,1.6
		c-1,1-1.5,2.2-1.5,3.5c0,1.6,0.7,3.1,2.2,4.3c3.2,2.8,6.5,4.9,10,6.2l0,0c3.5,1.3,7.5,1.9,12,1.9c4.2,0,8-0.8,11.5-2.3
		c3.5-1.6,6.3-3.8,8.4-6.6c2.1-2.9,3.1-6.2,3.1-9.8c0-4.2-0.9-7.6-2.6-10.2C302.1,52,299.6,49.9,296.5,48.4z M374.3,49.1L374.3,49.1
		c-1-1-2.2-1.5-3.6-1.5h-16c-1.4,0-2.6,0.5-3.6,1.5c-1,1-1.5,2.2-1.5,3.7c0,1.4,0.5,2.6,1.5,3.6s2.2,1.5,3.6,1.5H365V71
		c-1.5,0.7-3.2,1.2-5.3,1.7c-2.2,0.5-4.4,0.7-6.4,0.7c-4.2,0-8.1-1-11.6-3.1c-3.5-2.1-6.3-4.9-8.3-8.5c-2-3.5-3-7.5-3-11.8
		s1-8.3,3-11.8c2-3.6,4.8-6.4,8.3-8.5c3.5-2,7.4-3.1,11.6-3.1c3.9,0,7.8,0.9,11.6,2.6c0.8,0.5,1.7,0.7,2.8,0.7
		c1.4,0,2.6-0.5,3.5-1.6c1-1,1.4-2.3,1.4-3.7c0-0.9-0.2-1.7-0.7-2.4s-1.1-1.3-1.9-1.8c-2.3-1.4-4.9-2.4-7.8-3.1c-2.9-0.7-5.9-1-9-1
		c-6.2,0-11.9,1.5-17.1,4.5c-5.2,3-9.3,7.1-12.3,12.2c-3,5.1-4.5,10.8-4.5,16.9S321,61.9,324,67c3,5.1,7.1,9.2,12.3,12.2
		c5.2,3,10.9,4.5,17.1,4.5c3.6,0,7.1-0.5,10.5-1.5c3.4-1,6.6-2.5,9.4-4.3c1.7-1,2.6-2.6,2.6-4.5V52.8
		C375.8,51.3,375.3,50.1,374.3,49.1z" class="st0" id="Wordmark" data-v-b441d17a=""></path></g></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="125 90 750 210" width="20%"></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="125 90 750 210" width="20%"><g id="Layer_1"><path fill="#300d4f" d="M327.7 256.6V133.5c0-1.3 1-2.3 2.3-2.3h35.8c22.7 0 36.8 13.5 36.8 36.1s-16 37-37 37h-19.1c-.6 0-1.2.5-1.2 1.2v51.2c0 1.3-1 2.3-2.3 2.3h-13c-1.2 0-2.3-1.1-2.3-2.4zm38.2-67.4c12 0 18.8-10.2 18.8-21.8 0-12-6.2-21.1-18.8-21.1h-19.3c-.6 0-1.2.5-1.2 1.2V188c0 .6.5 1.2 1.2 1.2h19.3z" class="st2"></path><path fill="#300d4f" d="M480.8 131.1h13c1.3 0 2.3 1 2.3 2.3v93c0 21.1-16.9 34-36.7 34-19.4 0-36.3-13-36.3-34v-93c0-1.3 1-2.3 2.3-2.3h12.8c1.3 0 2.3 1 2.3 2.3V226c0 11.5 8.6 18.8 18.8 18.8 10.2 0 19-7.3 19-18.8v-92.6c.2-1.2 1.2-2.3 2.5-2.3z" class="st2"></path><path fill="#300d4f" d="M539.9 194.3c-12.4-8.5-20.7-18-20.7-32.3 0-20.5 16.9-32.3 36.1-32.3 18.1 0 34 10.3 34.9 36.3 0 1.3-1 2.5-2.3 2.5H576c-1.2 0-2.3-1-2.3-2.2-.8-14.1-9.1-20.9-19.5-20.9-10 0-17.5 6-17.5 15.6 0 8.3 4.9 12.8 17.7 22l17.9 13.2c12.4 9.2 19.4 17.5 19.4 30.6 0 21.2-17.1 33.8-37.2 33.8-19 0-34-10.6-35.6-36.6-.1-1.4 1-2.5 2.3-2.5h12.1c1.2 0 2.2 1 2.3 2.2 1.1 14.5 9.6 21.2 19.6 21.2 9.6 0 18.6-5.3 18.6-17.7 0-7.7-3.4-11.5-13.2-18.2l-20.7-14.7z" class="st2"></path><path fill="#300d4f" d="M670.5 256.6v-53.8c0-.6-.5-1.2-1.2-1.2H634c-.6 0-1.2.5-1.2 1.2v53.8c0 1.3-1 2.3-2.3 2.3h-13c-1.3 0-2.3-1-2.3-2.3V133.5c0-1.3 1-2.3 2.3-2.3h13c1.3 0 2.3 1 2.3 2.3v51.4c0 .6.5 1.2 1.2 1.2h35.3c.6 0 1.2-.5 1.2-1.2v-51.4c0-1.3 1-2.3 2.3-2.3h13c1.3 0 2.3 1 2.3 2.3v123.2c0 1.3-1 2.3-2.3 2.3h-13c-1.3 0-2.3-1.1-2.3-2.4z" class="st2"></path><path fill="#300d4f" d="M713 256.6V133.5c0-1.3 1-2.3 2.3-2.3h63.6c1.3 0 2.3 1 2.3 2.3v10.7c0 1.3-1 2.3-2.3 2.3h-47.1c-.6 0-1.2.5-1.2 1.2v37.7c0 .6.5 1.2 1.2 1.2h32.4c1.3 0 2.3 1 2.3 2.3v10.7c0 1.3-1 2.3-2.3 2.3h-32.4c-.6 0-1.2.5-1.2 1.2v39.2c0 .6.5 1.2 1.2 1.2h47.1c1.3 0 2.3 1.1 2.3 2.3v10.7c0 1.3-1.1 2.3-2.3 2.3h-63.6c-1.3.2-2.3-.9-2.3-2.2z" class="st2"></path><path fill="#300d4f" d="M855.5 256.6l-19.2-53.5c-.2-.5-.6-.8-1.1-.8h-17.8c-.6 0-1.2.5-1.2 1.2v53.1c0 1.3-1 2.3-2.3 2.3h-13c-1.3 0-2.3-1-2.3-2.3V133.5c0-1.3 1-2.3 2.3-2.3h35.6c21.8 0 36.8 14.1 36.8 35 0 13.9-7.2 25.5-20.4 32.3-.3.1-.4.4-.3.7l21.7 56.7c.6 1.5-.5 3.2-2.2 3.2h-13.5c-1.2-.1-2.6-1.1-3.1-2.5zm-20.4-68.9c10.5 0 19.9-7.5 19.9-20.7 0-11.8-7.5-20.7-19.9-20.7h-17.7c-.6 0-1.1.5-1.1 1.1v39c0 .6.5 1.2 1.2 1.2h17.6z" class="st2"></path><path fill="#300d4f" d="M262.1 146.2v-13.1c0-.2-.1-.4-.3-.5l-65-37.5c-.2-.1-.4-.1-.6 0l-10.8 6.2c-.4.2-.4.8 0 1l63.8 36.8c.4.2.4.8 0 1l-13.6 7.9c-.2.1-.4.1-.6 0l-65-37.5c-.2-.1-.4-.1-.6 0l-10.8 6.2c-.4.2-.4.8 0 1l63.8 36.8c.4.2.4.8 0 1l-13.6 7.9c-.2.1-.4.1-.6 0l-65-37.5c-.2-.1-.4-.1-.6 0l-11.4 6.6c-.2.1-.3.3-.3.5v124.4c0 .2.1.4.3.5l10.8 6.2c.4.2.9-.1.9-.5v-123c0-.5.5-.7.9-.5l13.6 7.9c.2.1.3.3.3.5v124.4c0 .2.1.4.3.5l10.8 6.2c.4.2.9-.1.9-.5v-123c0-.5.5-.7.9-.5l13.6 7.9c.2.1.3.3.3.5v124.4c0 .2.1.4.3.5l10.8 6.2c.4.2.9-.1.9-.5v-48c0-.2.1-.4.3-.5l65-37.5c.2-.1.3-.3.3-.5v-12.5c0-.5-.5-.7-.9-.5L197.4 232c-.4.2-.9-.1-.9-.5v-15.8c0-.2.1-.4.3-.5l65-37.5c.2-.1.3-.3.3-.5v-12.5c0-.5-.5-.7-.9-.5L197.4 201c-.4.2-.9-.1-.9-.5v-15.8c0-.2.1-.4.3-.5l65-37.5c.2-.1.3-.2.3-.5zm-65.6 24.4z" class="st2"></path></g></svg></div>




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




