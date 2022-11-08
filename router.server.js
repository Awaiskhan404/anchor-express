
class Router {
    constructor() {
        const ModuleLoader = require('anchor-express/module.loader.server')
        this.route = [];
        this.loader = new ModuleLoader()
        this.modules = this.loader.__lookup__('modules')
    }

    /**
     * @param {ThisParameterType.modules} this
     * @returns {ThisParameterType.route}
    **/
    LoadRoutes() {
        this.modules?.forEach((_) => {
            this.route.push(_)
        })
        return this.route
    }
}

module.exports = new Router()
