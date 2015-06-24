var bemNaming = require('bem-naming'),
    traverse = require('traverse');

module.exports = function(entity) {
    var baseClass, allClasses = [];

    if(!entity.block) {
        return;
    }

    baseClass = bemNaming.stringify(entity);
    allClasses.push(baseClass);

    if(entity.mix) {
        entity.mix.forEach(function(mix) {
            allClasses.push(bemNaming.stringify(mix));
        });
    }

    if(entity.mods) {
        Object.keys(entity.mods).forEach(function(mod) {
            var clone = traverse(entity).clone()
            clone.modName = mod;
            clone.modVal = entity.mods[mod];
            allClasses.push(bemNaming.stringify(clone));
        });
    }

    return allClasses ? '.' + allClasses.join('.') : false;
}
