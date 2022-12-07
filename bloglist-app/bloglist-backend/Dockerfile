FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm ci

ENV NODE_ENV=production

USER node

CMD ["npm", "run", "start:docker"]