FROM node:10.11.0-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
CMD [ "node", "index.js" ]