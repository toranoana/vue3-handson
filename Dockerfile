FROM node:14-alpine AS base

ARG WORKDIR=/var/www/app

ENV LANG=C.UTF-8 TZ=Asia/Tokyo

RUN apk add --no-cache \
    tini \
    tzdata 

RUN mkdir -p $WORKDIR
WORKDIR $WORKDIR

RUN addgroup -S nodejs && \
  adduser -S nodejs nodejs

EXPOSE 3000

