FROM node:hydrogen-alpine3.20
COPY . ./app
WORKDIR /app
RUN npm i
EXPOSE 4200
ENTRYPOINT ["npm"]
CMD ["run","dev"]