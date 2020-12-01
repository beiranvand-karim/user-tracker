FROM node:alpine

WORKDIR /app

COPY package.json yarn.lock ./

COPY . ./

RUN yarn install

EXPOSE 5000

RUN yarn run build

RUN yarn global add serve
