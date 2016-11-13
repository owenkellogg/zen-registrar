FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/

RUN npm install
RUN npm install sails

# Bundle app source
COPY . /usr/src/app

CMD [ "npm", "start" ]

