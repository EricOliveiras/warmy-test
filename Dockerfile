FROM node:18

WORKDIR /usr/src

COPY package*.json ./

RUN npm install -y

COPY . .

RUN npx prisma generate

RUN npm run build

EXPOSE 3333

CMD ["node", "build/index.js"]
