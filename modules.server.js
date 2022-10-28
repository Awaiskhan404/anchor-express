class __Modules__ {
    constructor() {
        this.modules = [];
    }
    __lookup__() {
        try {
            const modules = require(`${process.cwd()}/modules`);
            modules.forEach((module) => {
                this.modules.push(module)
            });
            return this.modules;
        }
        catch (err) {
            return err;
        }
    }
}

module.exports = new __Modules__();
