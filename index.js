var cssrulekey = require('./lib/cssrulekey.js'),
    traverse = require('traverse');

module.exports = function transformHtmlAttrs(options) {
    var opts = options || {};

    return function(tree) {
        traverse(tree).forEach(function(entity) {

            this.node.tag && this.after(function() {

                entity.attrs = opts.css[cssrulekey(this.node)];

                this.update(entity);
            });
        });

        return tree;
    }
}
