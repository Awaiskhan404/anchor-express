class __Modules__ {
    constructor() {
        this.modules = [];
    }
    __lookup__() {
        try {
            const fs = require('fs');
            const modules = require('./modules');
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
