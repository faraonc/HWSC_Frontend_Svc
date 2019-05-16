#!/usr/bin/env bash
set -e

echo "-------- WAITING FOR USER SERVICE"

host="$1"
shift
cmd="$@"

echo $host
echo $cmd

sleep 10

>&2 echo "===================== EXEC APP GATEWAY"
exec $cmd
