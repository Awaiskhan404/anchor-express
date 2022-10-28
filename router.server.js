
class Router {
    constructor() {
        const mod = require('./modules.server')
        this.route = [];
        this.modules = mod.__lookup__()
    }

    LoadRoutes() {
        this.modules?.forEach((module) => {
            this.route.push(module?.route)
        })
        return this.route
    }
}

module.exports = new Router()
