'use strict'

const queryString = require('query-string')
const req = require('puny-req')

module.exports = function (name, options = {}) {
  if (typeof name !== 'string') {
    return Promise.reject(new Error('Name must be a string'))
  }

  const url = `https://registry.npmjs.org/${name.toLowerCase()}/?${options.params ? queryString.stringify(options.params) : ''}`

  return req(url)
    .then((res) => Promise.resolve(res.statusCode === 404))
}
