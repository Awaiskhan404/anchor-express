class __Finder__ {
    constructor() {
        this.__nodes__ = [];
    }
    /**
     * @param {string} section_
     *  @returns {Array}
     **/
    __lookup__(section_) {
        try {
            const node = require(`${process.cwd()}/${section_}`);
            node.forEach((_) => {
                this.__nodes__.push(_)
            });
            return this.__nodes__;
        }
        catch (err) {
            return [];
        }
    }
}


module.exports = __Finder__;
