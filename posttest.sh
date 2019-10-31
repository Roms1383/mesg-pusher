#!/bin/sh
mesg-cli service:stop "$(cat MESG_INSTANCE_HASH.txt)"
mesg-cli daemon:stop
rm -f ./MESG_SERVICE_HASH.txt
rm -f ./MESG_INSTANCE_HASH.txt
