FROM node:14.17.3

WORKDIR /usr/src/app

COPY . .
RUN npm install --production
RUN npm run build
CMD [ "npm", "start"]