# IMAGE USEAGE
# option 1:
# // Start todo db 
# `docker build -t henry/docker-node-todo`
# `docker run -d --name tododb mongo:latest`
# `docker run --rm --name web -it --link tododb:tododb -p 3000:3000 henry/docker-node-todo`
# option 2:
# `docker-compose up`



FROM node
MAINTAINER Henry Nguyen
ADD . /www
WORKDIR /www

RUN npm install

EXPOSE 3000

CMD node server.js