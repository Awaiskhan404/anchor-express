#How it works

This is a simple example of how to use the Anchor Express API. It handles basic routing and processes for express js. It is a good starting point for building your own web app.

##Getting Started

`npm install anchor-express`


#Structure
Create a _modules_ folder and create a file _index.js_ that will store moduler information

```
const modules = [
    {
        name: 'shipping',
        route: require('./shipping/router').route
    }
]
module.exports = modules
```

In module folder create your modules folder. that will have one _routes.js_ file to store routing of your apis

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

```javascript
const { Server, Router } = require('anchor-express');

const router = new Router(modules);
const server = new Server(router.LoadRoutes(), 3000);
```


