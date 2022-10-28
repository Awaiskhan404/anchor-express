class Server {
    constructor(port, restful = true) {
        const Router = require('./router.server');
        const middlewares = require('./middlewares.server');
        this.Rest = require('express')
        this.instance = this.Rest()
        this.routes = Router.LoadRoutes()
        this.port = port
        this.middlewares = middlewares.__lookup__()
        this.restful = restful
        this.restful && this.instance.use(this.Rest.json());
        this.addMiddleware()
        this.addRoute()
        this.start()

    }
    addRoute = () => {
        this.routes?.map((route) => {
            return route?.map((_) => {
                return this.instance[_.method](
                    _.route,
                    (request, response) => {
                        return response.json(_.controller(request))
                    }
                )
            })
        })
    }
    addMiddleware = () => {
        this.middlewares?.map((_) => {
            console.log(`Middleware ${_.name} loaded`)
            return this.instance.use(_.middleware)
        })
    }
    start = () => {
        this.instance.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`)
        })
    }
}

module.exports = Server
