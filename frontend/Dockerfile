FROM node:8.12
WORKDIR /home/node
COPY . ./
RUN npm install \
  && npm run build

EXPOSE 4200
CMD npm start
