FROM node:10 as build-stage

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle app source
COPY ./ ./

RUN npm run build:prod

WORKDIR /app/dist

ARG configuration=production

ENV NODE_ENV=${configuration}

EXPOSE 3000
CMD [ "node", "index.js" ]
