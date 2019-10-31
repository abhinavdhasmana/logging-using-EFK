FROM node:10.16.0-alpine

WORKDIR /local/logging

# copy app dependencies
COPY ./package*.json /local/logging/

# RUN npm install
RUN cd /local/logging && npm install

# Bundle app source
COPY . .

EXPOSE 3000
CMD ["sh", "-c", "npm start"]