var resemble = require('node-resemble-js');
var fsp = require('fs-promise');

module.exports.compareImages = function compareImages(pathImage1, pathImage2) {
    return Promise.all([
        fsp.readFile(pathImage1),
        fsp.readFile(pathImage2)
    ])
    .then(function (imagesData) {
        return new Promise(function(resolve) {
            resemble(imagesData[0]).compareTo(imagesData[1]).onComplete(resolve);
        });
    });
};
