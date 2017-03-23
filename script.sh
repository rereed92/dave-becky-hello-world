#!/bin/bash

gulp build
docker build -t daveandbeckyhelloworld:1.0 .
docker run -p 4000:4000 -d daveandbeckyhelloworld:1.0

echo 'Opening chrome tab on port 4000.'
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --new-window "http://localhost:4000"

echo 'Your docker process is running with ID: '
docker ps -lq
