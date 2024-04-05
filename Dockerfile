FROM ubuntu:22.04

LABEL maintainer="dvishal485@gmail.com"
LABEL version="0.1"
LABEL description="Docker image to run DTU Times website"

ARG DEBIAN_FRONTEND=noninteractive

WORKDIR /app

# env variables
ENV NODE_VERSION 15.5.0
ENV PYTHON python2.7
ENV OWNER https://github.com/dtutimes
ENV REPO Main_website

RUN apt update
RUN apt upgrade -y

# Install some deps
RUN apt install build-essential checkinstall curl git tar -y
# Install python
RUN apt install $PYTHON-minimal -y

# Install node
RUN curl https://nodejs.org/download/release/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.gz --output node.tar.gz
RUN tar -xf node.tar.gz && rm node.tar.gz
ENV PATH $PATH:/app/node-v$NODE_VERSION-linux-x64/bin

# clone website repo
COPY . $REPO
# RUN git clone $OWNER/$REPO.git

# install website dependencies
WORKDIR $REPO
# serve is used to run the website (host from /build folder)
RUN npm install -g serve
RUN npm install --force --unsafe-perm=true --all
RUN npm run postinstall

# npm uninstall --save-dev node-sass
# npm install --save-dev node-sass

# run build tasks
RUN npm run compile-sass && npm run minify-sass
RUN npm run build

# run website
ENTRYPOINT serve -s build
EXPOSE 3000
