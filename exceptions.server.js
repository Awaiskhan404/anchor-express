class Exceptions {
    constructor(_instance) {
        this.instance = _instance
    }

    /**
     * @param {ThisParameterType} this
     * @returns {ThisParameterType.instance.errors}
     * */

    handleException = () => {
        process.on('unhandledRejection', (err, promise) => {
            console.log("ERROR", err.message);
        });
        process.on('uncaughtException', (err, origin) => {
            console.log("ERROR", err.message);
            this.instance.close(() => {
                process.exit(1);
            });
        });
    }
}

module.exports = Exceptions