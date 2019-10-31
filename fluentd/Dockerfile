FROM fluent/fluentd:latest
MAINTAINER Abhinav Dhasmana <Abhinav.dhasmana@live.com>

USER root

RUN apk add --no-cache --update --virtual .build-deps \
  sudo build-base ruby-dev \
  && sudo gem install fluent-plugin-elasticsearch \
  && sudo gem install fluent-plugin-record-modifier \
  && sudo gem install fluent-plugin-concat \
  && sudo gem sources --clear-all \
  && apk del .build-deps \
  && rm -rf /home/fluent/.gem/ruby/2.5.0/cache/*.gem

COPY fluentd.conf /fluentd/etc/