class Router {
    constructor(modules) {
        this.route = [];
        this.modules = modules
    }

    LoadRoutes() {
        this.modules?.forEach((module) => {
            this.route.push(module?.route)
        })
        return this.route
    }
}

module.exports = Router