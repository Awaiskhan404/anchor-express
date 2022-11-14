const readdirSync = require('fs').readdirSync;

class ModuleLoader {
    constructor() {
        this.__modules__ = [];
        this.__nodes__ = [];
    }
    /**
     * @param {string} section_
     * @returns {Array}
     * */
    __lookup__(this, section_) {
        try {
            const dirs = this.getDirectories(section_);
            if (dirs.length > 0 && dirs !== undefined) {
                dirs.forEach((dir) => {
                    try {
                        const _ = require(`${process.cwd()}/${section_}/${dir}/router`);
                        if (_ != {} && this.validateRoute(_)) {
                            this.__modules__.push(_);
                            console.log(`Module ${dir} loaded!`)
                        }
                        else {
                            console.log(`Aborted module ${dir} has routes without exported or missing controller, route or method`);
                        }
                    }
                    catch (e) {
                        console.log(`Aborted module ${dir} routes not found!`)
                    }
                });
            }
            return this.__modules__;
        }
        catch (err) {
            return [];
        }
    }
    getDirectories = source =>
        readdirSync(source, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name)
    validateRoute = mod => {
        let isValid = false;
        mod.map((_) => {
            if (
                _.controller != undefined
                && _.route != undefined
                && _.method != undefined
            ) {
                isValid = true;
            }
        })
        return isValid;
    }
}

module.exports = ModuleLoader;