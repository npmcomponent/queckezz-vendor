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
    <script src='build/build.js'></script>
  </head>
  <body>
    <script>
      var vendor = require('vendor')

      vendor()
      // returns normal vendor 'webkit'

      vendor('dom')
      // return 'WebKit'

      vendor('js')
      // returns 'Webkit'

      vendor('css')
      // returns '-webkit-'
    </script>
  </body>

```

## License

  MIT