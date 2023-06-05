FROM node:17.6.0

WORKDIR /app


COPY ./package.json ./

RUN npm install && npm run build

EXPOSE 3000

CMD [ "npm", "start" ]