FROM node:14-alpine as builder
RUN apk add --no-cache git
WORKDIR /usr/src/app
ENV PATH /app/node_modules/.bin:$PATH
COPY . .
RUN yarn install && yarn build
COPY src/server dist/server
RUN rm -rf src

FROM node:14-alpine as app
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app .
RUN rm -rf cypress
EXPOSE 3000
CMD [ "yarn", "start:server"]

FROM cypress/included:5.5.0 as test-runner
WORKDIR /app
COPY --from=builder /usr/src/app /app
ENTRYPOINT ["sh", "-c", "cypress run"]
