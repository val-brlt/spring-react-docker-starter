# Utiliser l'image Node pour construire l'app React
FROM node:23-alpine as build

RUN npm install -g npm@latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80

CMD ["npm", "start"]