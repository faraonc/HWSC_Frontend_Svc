FROM envoyproxy/envoy-dev:latest

RUN apt-get update

# for envsubst command used in docker-entrypoint.sh
RUN apt-get install gettext -y

ENTRYPOINT ["/docker-entrypoint.sh"]
