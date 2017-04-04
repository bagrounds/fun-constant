/**
 *
 * @module fun-constant
 */
;(function () {
  'use strict'

  /* exports */
  module.exports = constant

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

  function setProp (key, value, target) {
    return Object.defineProperty(target, key, { value: value })
  }
})()

