# docker build -f ./dev.Dockerfile -t todo-frontend-dev .

# docker run -p 3000:3000 -v "$(pwd):/usr/src/app/" todo-frontend-dev

FROM node:16

WORKDIR /usr/src/app

COPY package.json package.json
COPY package-lock.json package-lock.json

ARG REACT_APP_BACKEND_URL
ENV REACT_APP_BACKEND_URL=$REACT_APP_BACKEND_URL

RUN npm ci
COPY . .
RUN npm run build
RUN npm install -g serve

USER node
CMD ["serve", "-s", "build", "-p", "3000"]