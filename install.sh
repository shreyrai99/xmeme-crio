#!/bin/bash

sudo apt-get install -y nodejs

sudo apt install -y npm

curl -fsSL https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -

echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list

sudo apt update

sudo apt-get install -y mongodb-org

sudo systemctl start mongod.service

sudo systemctl status mongod

sudo systemctl enable mongod
