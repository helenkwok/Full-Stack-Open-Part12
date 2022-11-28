# docker build . -t todo-frontend

# docker run -p 5000:80 todo-frontend

FROM node:16 AS base

WORKDIR /usr/src/app

COPY package.json package.json
COPY package-lock.json package-lock.json

ARG REACT_APP_BACKEND_URL
ENV REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL

FROM base as test

RUN npm ci
COPY . .
ENV CI=true
CMD [ "npm", "run", "test" ]

FROM base AS build-stage

RUN npm ci
COPY . .
RUN npm run build

RUN npm install -g serve

USER node

CMD ["serve", "-s", "build", "-p", "3000"]

#FROM nginx:stable-alpine

#COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html