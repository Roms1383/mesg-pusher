FROM node:10.17.0-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --production
COPY . .
CMD [ "node", "index.js" ]