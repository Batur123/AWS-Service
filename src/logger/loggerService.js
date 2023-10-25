const logger = require('../logger/index')

module.exports = class Logger {
    constructor(name) {
        this.className = name
    }

    log(message, data = null) {
        logger.info({ ...data }, `${this.className}/${message}`)
    }
}
