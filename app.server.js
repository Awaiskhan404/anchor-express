class Server {
    constructor(port, restful = true) {
        const Router = require('./router.server');
        this.Rest = require('express')
        this.instance = this.Rest()
        this.routes = Router.LoadRoutes()
        this.port = port
        restful && this.instance.use(this.Rest.json());
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
    start = () => {
        this.instance.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`)
        })
    }
}

module.exports = Server
