FROM node:alpine

WORKDIR /usr/app

COPY package.json ./
RUN npm install

COPY . .

EXPOSE 3002

CMD ["npm", "start"]

#docker ps / mostra os conteiners
#docker build -t nomeconteiner -d porta:porta . / para criar um conteiner
#docker run -p 3002:3002 -d nomedoconteiner / para rodar o conteiner
