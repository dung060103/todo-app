#!/bin/bash

docker run --rm --name mongo_todo-app -d -p 27017:27017 -d mongo:3.6