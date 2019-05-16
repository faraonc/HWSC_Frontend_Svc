#!/usr/bin/env bash

until docker inspect -f {{.State.Running}} dev-user-svc; do
sleep 1
done

