FROM node:16.17.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN apk update && \
  apk upgrade && \
  apk add --no-cache make gcc g++ python3 && \
  npm install && \
  npm rebuild bcrypt --build-from-source && \
  apk del make gcc g++ python3

COPY . .
CMD npm run dev