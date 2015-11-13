var objectAssign = require('object-assign');
var matchHelper = require('posthtml-match-helper');

module.exports = function (options) {
    options = options || {};
    options.attrsTree = options.attrsTree || {};

    return function extendAttrs(tree) {
        var keys = Object.keys(options.attrsTree);
        var matchers = keys.map(matchHelper);
        keys.forEach(function(key, i) {
            tree.match(matchers[i], function(node) {
                node.attrs = objectAssign({}, node.attrs || {}, options.attrsTree[key]);
                return node;
            });
        });
    };
};
