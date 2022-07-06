FROM node:14

WORKDIR /usr/src/app

EXPOSE 3000

COPY . . 

RUN npm install -g serve

RUN npm ci

RUN npm run build 

CMD ["serve", "-s", "-l", "3000", "build"]