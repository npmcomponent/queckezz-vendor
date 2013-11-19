# vendor

  Detect vendor prefix for js, dom, css and default on the current browser.

## Installation

    $ component install queckezz/vendor

## Example

```html
<!doctype html>
<html>
  <head>
    <meta charset='utf-8'>
    <title>detect vendor</title>
    <script src='build/build.js'></script>
  </head>
  <body>
    <script>
      var vendor = require('vendor')

      console.log('vendor: %s', vendor())
      // returns either 'webkit', 'ms', 'moz'

    </script>
  </body>
```

## API

* <a href="#api-vendor"><code>vendor()</code></a>

------------------------------------------------
<a name="api-vendor"></a>
### vendor()
returns one of the following vendors

* `moz`
* `ms`
* `webkit`

based on the browser you're using.

## License

  MIT