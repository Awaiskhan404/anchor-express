class __Modules__ {
    constructor() {
        this.modules = [];
    }
    __lookup__() {
        try {
            const modules = require(`${process.cwd()}/modules`);
            modules.forEach((module) => {
                console.log(`Module ${module.name} loaded`)
                this.modules.push(module)
            });
            return this.modules;
        }
        catch (err) {
            return [];
        }
    }
}

module.exports = new __Modules__();
