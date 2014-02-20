*This repository is a mirror of the [component](http://component.io) module [queckezz/vendor](http://github.com/queckezz/vendor). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/queckezz-vendor`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
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
      // returns either 'webkit', 'ms' or 'moz'.
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