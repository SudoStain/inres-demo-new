FROM node:16-alpine

WORKDIR /app
COPY package.json .
RUN npm install --only=prod --force
# RUN npm install --legacy-peer-deps --force
COPY . .

CMD ["npm", "start"]