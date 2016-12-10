/*global expect*/

var compareImages = require('../index.js').compareImages;

describe('compareImages', function () {
    it('works', function (done) {
        compareImages('spec/test.png', 'spec/testSame.png')
        .then(function (data) {
            expect(data.misMatchPercentage).toBe('0.00');
        })
        .then(done)
        .catch(done.fail);
    });
    it('rejects on unexisting image', function (done) {
        compareImages('spec/testDoesntExist.png', 'spec/testSame.png')
        .then(done.fail)
        .catch(done);
    });
    it('rejects on unexisting second image', function (done) {
        compareImages('spec/test.png', 'spec/testDoesntExist.png')
        .then(done.fail)
        .catch(done);
    });
    it('rejects on unexisting images', function (done) {
        compareImages('spec/testDoesntExist.png', 'spec/testDoesntExist.png')
        .then(done.fail)
        .catch(done);
    });
});