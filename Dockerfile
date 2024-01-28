FROM node:20.10.0

# Create the bot's directory

RUN mkdir -p /usr/src/rpg-api

WORKDIR /usr/src/rpg-api


COPY package.json /usr/src/rpg-api
RUN npm install

COPY . /usr/src/rpg-api

EXPOSE 5000
# Start the bot.
CMD ["node", "index.js"]