FROM node:16.0.0-alpine3.13 AS builder
WORKDIR /app
COPY . .
RUN apk --no-cache add python3 make g++ \
    && npm install \
    && npm run build


FROM nginx:1.15.8-alpine
 
COPY --from=builder /app/build/ /usr/share/nginx/html
RUN apk update
RUN apk add ca-certificates wget && wget https://gist.githubusercontent.com/ratulbasak/5530bcfb208d6027a6dea0ab5504898c/raw/e6e9c1944dc5e83001eff04545f88980aa9abeb4/nginx.conf -O /etc/nginx/conf.d/default.conf && wget https://gist.githubusercontent.com/ratulbasak/51ffe81748dd3fbd96ca1cfa57fe20bc/raw/2701e93b7a96fba1452becffdbb1bfef7251db03/zgip.conf -O /etc/nginx/nginx.conf && rm -rf /var/cache/apk/*
