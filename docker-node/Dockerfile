FROM node:latest
MAINTAINER hernyng
ADD . /nodeapp
WORKDIR /nodeapp
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]