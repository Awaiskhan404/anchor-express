class __Middleware__ {
    constructor() {
        this.middlewares = [];
    }
    __lookup__() {
        try {
            const mid = require(`${process.cwd()}/middlewares/index`);
            mid.forEach((_) => {
                this.middlewares.push(_.middleware)
            });
            return this.middlewares;
        }
        catch (err) {
            return err;
        }
    }
}

module.exports = new __Middleware__();
