FROM node:latest

VOLUME /var/www

ADD . /var/www

WORKDIR /var/www


# RUN npm install pm2@latest -g

RUN npm install


# RUN mkdir -p /var/log/pm2

EXPOSE 3000

CMD npm start
# CMD ["pm2","start","server.js","--name","dockervolume","--log","/var/log/pm2/pm2.log","--watch","--no-daemon"]

# to build:
# #1: docker build -t henry/dockervolume .
# #2: docker-compose build

# to run:
# #1: docker run -p 3000:3000 -v D:/Projects/DockerSamples/dockervolume:/var/www henry/dockervolume
# #2: docker-compose up
