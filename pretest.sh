#!/bin/sh
npx rimraf ~/.mesg
mesg-cli daemon:start
mesg-cli account:create $MESG_ACCOUNT --passphrase $MESG_PASSPHRASE --quiet
mesg-cli service:create "$(mesg-cli service:compile --quiet)" --account $MESG_ACCOUNT --passphrase $MESG_PASSPHRASE --quiet > MESG_SERVICE_HASH.txt
mesg-cli service:start "$(cat MESG_SERVICE_HASH.txt)" --env PUSHER_APP_ID=$PUSHER_APP_ID --env PUSHER_APP_KEY=$PUSHER_APP_KEY --env PUSHER_APP_SECRET=$PUSHER_APP_SECRET --env PUSHER_CLUSTER=$PUSHER_CLUSTER --quiet > MESG_INSTANCE_HASH.txt
