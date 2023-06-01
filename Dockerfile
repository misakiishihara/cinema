FROM node:17.6.0

WORKDIR /app

COPY ./package.json ./

RUN npm install -g npm@latest && npm install create-next-app

EXPOSE 3000

CMD [ "npm", "start" ]