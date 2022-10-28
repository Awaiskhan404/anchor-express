
class Router {
    constructor() {
        const mod = require(`${process.cwd()}/modules.server`)
        // get base path of the project
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

module.exports = Router
