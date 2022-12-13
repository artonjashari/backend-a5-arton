FROM node:16

Run npm install

EXPOSE 3000

CMD ["npm", "run", "install"]

