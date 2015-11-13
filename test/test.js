var posthtml = require('posthtml'),
    expect = require('chai').expect,
    extendAttrs = require('..');


describe('Plugin', function() {

    it('should process simple class selectors', function() {
        var attrsTree = { '.wow': { id: 'wow_id' }},
            html = '<div class="wow">OMG</div>';

        return pluginProcess(attrsTree, html)
            .then(function(html) {
                expect(html).to.eql('<div class="wow" id="wow_id">OMG</div>');
            });
    });


    it('should process tag selectors', function () {
        var attrsTree = { 'div': { id: 'wow' }},
            html = '<div>OMG</div><p>block</p><div>OMG2</div>',
            expectedHtml = '<div id="wow">OMG</div><p>block</p>' +
                           '<div id="wow">OMG2</div>';

        return pluginProcess(attrsTree, html)
            .then(function(html) {
                expect(html).to.eql(expectedHtml);
            });
    });
});


function pluginProcess(attrsTree, html) {
    return posthtml()
        .use(extendAttrs({ attrsTree: attrsTree }))
        .process(html)
        .then(function (result) {
            return result.html;
        });
}
