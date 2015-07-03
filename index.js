var cssrulekey = require('./lib/cssrulekey.js'),
    traverse = require('traverse');

module.exports = function extendAttrs(options) {
    var opts = options || {};

    return function(tree) {

        traverse(tree).forEach(function(entity) {

            this.node.block && this.after(function() {

                // merge
                entity.attrs = opts.attrsTree[cssrulekey(this.node)];

                this.update(entity);
            });
        });

        return tree;
    };
};
