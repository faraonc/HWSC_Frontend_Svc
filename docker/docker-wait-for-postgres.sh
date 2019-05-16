#!/usr/bin/env bash
set -e

echo "------------- WAITING FOR POSTGRES"

host="$1"
shift
cmd="$@"

echo $host
echo $cmd

#until PGPASSWORD=$POSTGRES_PASSWORD psql -h "$host" -U "postgres" -c '\q'; do
#  >&2 echo "Postgres is unavailable - sleeping"
#  sleep 1
#done

sleep 5

>&2 echo "=========== EXEC USER SERVICE"
exec $cmd
