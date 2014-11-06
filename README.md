nodejs-mirror-proxy
===================

A mirror proxy to avoid CORS requests.

### To install:

```sh
sudo npm install
```

### To execute:

```sh
sudo node server.js
```

### Instructions:

Make a POST request to the server where you have installed Node with two parameters:
* url: the target of your original CORS request.
* data: information to be sended.

### To try:

You can send a request to Google with the following parameters:
* url: http://www.google.es
* data: {}

The server will return you HTML.

### For more information:

http://www.pabloanaya.com/blog/fix-ie8-cors-problems-using-node-js/
