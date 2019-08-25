require('dotenv/config')

const { convertObject } = require('./convert')

module.exports = convertObject(process.env)
