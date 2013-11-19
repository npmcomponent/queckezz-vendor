
/*
 * Expose `vendor`
 */

module.exports = vendor

/**
 * Current vendor.
 */

var curr

/**
 * Root el.
 */

var root = document.documentElement

/**
 * Get computed styles.
 */

var styles = window.getComputedStyle(root, '')

/*
 * Get current used browser vendor.
 *
 * @api public
 */

function vendor () {
  if(curr) return curr;

  curr = (Array.prototype
    .slice.call(styles)
    .join('')
    .match(/-(moz|webkit|ms)-/))[1]

  return curr
}