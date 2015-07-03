var posthtml = require('posthtml'),
    expect = require('chai').expect,
    extendAttrs = require('..'),
    config = { attrsTree: { '.wow' : { id: 'wow_id' }}};

describe('test', function() {

    it('test', function(done) {
        posthtml()
            .use(extendAttrs(config))
            .process('<div class="wow">OMG</div>')
            .then(function(result) {
                expect(result.html)
                    .to.eql('<div class="wow" id="wow_id">OMG</div>');

                done();
            });
    });
});