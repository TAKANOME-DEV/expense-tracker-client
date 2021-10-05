FROM mhart/alpine-node:14

WORKDIR /app

RUN mkdir data

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
