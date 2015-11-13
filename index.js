var objectAssign = require('object-assign');


function getSelector(entity) {
    var seletor = '';
    if (entity.attrs.class) {
        selector = '.' + entity.attrs.class;
    } else {
        selector = entity.tag;
    }

    return selector;
}


module.exports = function extendAttrs(options) {
    options = options || {};
    options.attrsTree = options.attrsTree || {};

    return function(tree) {

        return tree.walk(function(node) {
            if (node.tag) {
                var nodeSelector = getSelector(node);
                objectAssign(node.attrs, options.attrsTree[nodeSelector]);
            }

            return node;
        });
    };
};
