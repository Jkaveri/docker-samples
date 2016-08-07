# IMAGE USEAGE
# option 1:
# // Start todo db 
# `docker run -d --name tododb mongo:latest
# `docker run --rm --name web -it --link tododb:tododb -p 3000:3000 henry/docker-node-todo`
# option 2:
# `docker-compose up`



FROM node
ADD . /docker-node-todo
WORKDIR /docker-node-todo

RUN npm install

EXPOSE 3000

CMD node server.js