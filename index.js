var cssrulekey = require('./lib/cssrulekey.js'),
    traverse = require('traverse');

module.exports = function extendAttrs(options) {
    var opts = options || {};

    return function(tree) {
        traverse(tree).forEach(function(entity) {

            this.node.tag && this.after(function() {

                entity.attrs = opts.attrs[cssrulekey(this.node)];

                this.update(entity);
            });
        });

        return tree;
    }
}
