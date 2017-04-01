/**
 *
 * @module fun-constant
 */
;(function () {
  'use strict'

  /* imports */
  var funAssert = require('fun-assert')
  var guarded = require('guarded')
  var setProp = require('set-prop')

  var isFunction = funAssert.type('Function')

  /* exports */
  module.exports = guarded({
    inputs: [funAssert.pass()],
    f: constant,
    output: isFunction
  })

  /**
   *
   * @function module:fun-constant.constant
   *
   * @param {Function} value - to be returned
   *
   * @return {Function} that ignores its arguments and returns value
   */
  function constant (value) {
    return setProp('name', '* -> ' + value, function (anything) {
      return value
    })
  }
})()

