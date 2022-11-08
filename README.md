#How it works

This is a simple example of how to use the Anchor Express API. It handles basic routing and processes for express js. It is a good starting point for building your own web app.

##Getting Started

`npm install anchor-express`


#Structure
In your custom module folder you will have one _router.js_ file to store routing of your apis

```
const Shipping = require('./shipping.controller');

const route = [
    {
        route: '/',
        method: 'get',
        controller: Shipping.getworker
    },
    {
        route: '/',
        method: 'post',
        controller: Shipping.postworker
    },
]
module.exports = {
    route
}

```

##Usage
```
const server = new Server(3000);
```

##CHANGELOG

_anchor-express>1.2.2_ now supports middlewares. To use middleware create a folder named as middlewares and create index with the array of middleware as shown in the example

```
const middlewares = [
    {
        name: 'logger',
        middleware: require('./logger.middleware')
    }
]

module.exports = middlewares
```

#How to get a server instance

```
const server = new Server(3000);

const instance=server.getInstance();

```
