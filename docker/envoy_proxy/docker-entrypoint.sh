#!/usr/bin/env bash

# script needed to insert system's env var values into envoy.yaml

# value is passed from docker-compose.yaml command
export app_gateway_container="$1"

# creating a new file into /etc/envoy.yaml
# reusing the same file will not work, and will also overwrite the system's envoy.yaml into a blank, not sure why
cat /tmp/envoy.yaml.tmp | \
envsubst \$envoyproxy_port,\$envoyproxy_admin_port,\$envoyproxy_address,\$hosts_app_port,\$app_gateway_container > /etc/envoy.yaml

# start envoy
/usr/local/bin/envoy -c /etc/envoy.yaml
