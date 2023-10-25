const bunyan = require('bunyan')
const { loggerSource } = require('../configs/index')

const log = bunyan.createLogger({
    name: loggerSource,
    env: process.env.APP_ENV,
})

module.exports = log
