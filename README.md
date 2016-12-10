# node-image-compare-promise
Compares images returning a promise.
Uses `node-resemble-js` internally.

Install with:

```
npm install --save node-image-compare-promise
```

And use with:

```
var compareImages = require('node-image-compare-promise').compareImages;

compareImages('path/to/imageOne.png', 'path/to/imageTwo.png')
    .then(function (data) {
        // data is the result of node-resemble-js' comparison
        // data.misMatchPercentage
        // data.isSameDimensions
        // ...
    });
```

Check https://www.npmjs.com/package/node-resemble-js for more information.