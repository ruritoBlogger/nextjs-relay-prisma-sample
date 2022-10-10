FROM node:18

# TODO: watchmanを導入してrelay-compilerをwatchモードで起動出来るようにする
RUN mkdir /app
WORKDIR /app
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install

COPY . .
