
class Router {
    constructor() {
        const finder = require('anchor-express/finder.server')
        this.find = new finder()
        this.route = [];
        this.modules = this.find.__lookup__('modules')
    }

    /**
     * @param {ThisParameterType.modules} this
     * @returns {ThisParameterType.route}
    **/
    LoadRoutes() {
        this.modules?.forEach((module) => {
            console.log(`Module ${module.name} loaded`)
            this.route.push(module?.route)
        })
        return this.route
    }
}

module.exports = new Router()
