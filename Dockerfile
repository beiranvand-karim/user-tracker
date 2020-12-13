FROM node:alpine as builder
WORKDIR /app
COPY package.json yarn.lock ./
COPY . ./
RUN yarn install
EXPOSE 5000
RUN yarn run build
RUN yarn global add serve

FROM cypress/included:6.1.0 as test-runner
WORKDIR /app
COPY --from=builder /app ./

