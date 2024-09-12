FROM node:hydrogen-alpine3.20
COPY . ./app
WORKDIR /app
RUN npm i
EXPOSE 3000
ENTRYPOINT ["npm"]
CMD ["run","start:dev"]