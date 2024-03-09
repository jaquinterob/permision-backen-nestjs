FROM node:20-alpine

WORKDIR /usr/src/app

COPY . .
RUN npm install
RUN npm run build
USER node
CMD ["npm", "start:dev"]