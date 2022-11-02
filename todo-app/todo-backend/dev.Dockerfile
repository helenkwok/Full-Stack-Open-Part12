# docker build -f ./dev.Dockerfile -t todo-frontend-dev .

# docker run -p 3000:3000 -v "$(pwd):/usr/src/app/" todo-frontend-dev

FROM node:16

WORKDIR /usr/src/app

COPY . .

# Change npm ci to npm install since we are going to be in development mode
RUN npm install

ENV DEBUG=todo-backend:*

USER node

# npm run dev is the command to start the application in development mode
CMD ["npm", "run", "dev"]