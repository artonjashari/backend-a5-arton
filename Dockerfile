FROM node:16

WORKDIR /usr/backend-a5

COPY package*.json /usr/backend-a5/

RUN npm install

COPY . /usr/backend-a5

EXPOSE 3000

CMD [ "npm", "run", "start" ]