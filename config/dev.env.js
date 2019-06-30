'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  APP_ENV: '"dev"',
  baseUrl: '"http://192.168.0.100:3000/"'
})
