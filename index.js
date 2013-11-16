
/*
 * Expose `vendor`
 */

module.exports = vendor

/*
 * Get current used browser vendor.
 *
 * @param {String} env
 * @api public
 */

function vendor (env) {
  var styles = window.getComputedStyle(document.documentElement, '')
  var occurences = Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/)
  var dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + occurences[1] + ')', 'i'))[1];
  var js = occurences[1][0].toUpperCase() + occurences[1].substr(1)

  if (env === 'js') return js;
  if (env === 'dom') return dom;
  if (env === 'css') return occurences[0];
  return occurences[1]
}