#How it works

This is a simple example of how to use the Anchor Express API. It handles basic routing and processes for express js. It is a good starting point for building your own web app.

##Getting Started

`npm install anchor-express`

##Usage

```javascript
const { Server, Router } = require('anchor-express');

const router = new Router(modules);
const server = new Server(router.LoadRoutes(), 3000);
```
