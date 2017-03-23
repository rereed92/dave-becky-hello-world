FROM node:6-alpine

RUN mkdir -p /var/app/helloworld

WORKDIR /var/app/helloworld

COPY package.json ./
RUN npm install --production

COPY server.js ./
COPY public ./public

EXPOSE 4000

CMD npm start