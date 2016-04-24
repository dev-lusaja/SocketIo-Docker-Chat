# NODEJS

FROM node:0.12

ADD . /srv/chatIo
WORKDIR /srv/chatIo

EXPOSE 3000

RUN npm install

CMD ["node", "index.js"]