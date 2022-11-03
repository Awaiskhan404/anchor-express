class Server {
    constructor(port, restful = true) {
        const Router = require('./router.server');
        const finder = require('anchor-express/finder.server')
        const _except = require('anchor-express/exceptions.server')
        this.find = new finder()
        this.Rest = require('express')
        this.instance = this.Rest()
        this.exceptionHandler = new _except(this.instance)
        this.routes = Router.LoadRoutes()
        this.port = port
        this.middlewares = this.find.__lookup__('middlewares/index')
        this.restful = restful
        this.restful && this.instance.use(this.Rest.json());
        this.addMiddleware()
        this.addRoute()
        this.start()
    }
    /**
     * @param {array of routes} this
     * @returns {function ['get','post','put','patch','delete']
     * 
     * (params) {
        
     }}
     * 
    **/
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

    /**
     * @param {array of middlewares} this
     * @returns {function ['use']
     **/
    addMiddleware = () => {
        this.middlewares?.map((_) => {
            console.log(`Middleware ${_.name} loaded`)
            return this.instance.use(_.middleware)
        })
    }

    /**
     * @param {ThisParameterType} this
     * @returns {ThisParameterType.instance}
     **/
    getInstance = () => {
        return this.instance
    }

    /**
     * @param {ThisParameterType} this
     * @returns {ThisParameterType.instance.listen}
     **/
    start = () => {
        this.instance.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`)
            this.exceptionHandler.handleException()
        })
    }

}

module.exports = Server