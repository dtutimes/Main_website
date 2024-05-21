FROM node:15.5.0-alpine3.11

LABEL maintainer="dvishal485@gmail.com"
LABEL version="0.2"
LABEL description="Docker image to run DTU Times Frontend website"

WORKDIR /app

# env variables
ENV REPO Main_website

RUN apk add --no-cache python2 make g++

# clone website repo
COPY . $REPO

# install website dependencies
WORKDIR $REPO

# serve is used to run the website (host from /build folder)
RUN npm install -g serve@14.2.3
RUN npm install --force --unsafe-perm=true --all
RUN npm run postinstall

# npm uninstall --save-dev node-sass
# npm install --save-dev node-sass

# run build tasks
RUN npm run compile-sass && npm run minify-sass && npm run map-sass
RUN npm run build

# entry point
ENTRYPOINT serve -p 5173 -s build
