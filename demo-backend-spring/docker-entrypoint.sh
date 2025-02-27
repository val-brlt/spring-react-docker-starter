#!/bin/sh

export TERM=xterm

mvn spring-boot:run &

while true; do
    watch -d -t -g "ls -lR . | sha1sum" && mvn compile
done