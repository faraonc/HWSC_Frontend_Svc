#!/usr/bin/env bash

TIME="$1"
HOST="$2"

shift
shift
CMD="$@"

echo "------------- WAITING FOR $HOST"
sleep $TIME

echo "=========== FINISHED LAUNCHING $HOST"
exec $CMD
