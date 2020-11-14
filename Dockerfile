FROM node:latest

WORKDIR /app

ADD . /app

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]