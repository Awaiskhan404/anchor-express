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
    __lookup__(section_) {
        try {
            const dirs = this.getDirectories(section_);
            if (dirs.length > 0 && dirs !== undefined) {
                dirs.forEach((dir) => {
                    console.log(`Module ${dir} loading...`)
                    try {
                        const module = require(`${process.cwd()}/${section_}/${dir}/router`);
                        this.__modules__.push(module);
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
}

module.exports = ModuleLoader;