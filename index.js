'use strict';

function cloneDeep(object) {
    var output;

    var objectType = Object.prototype.toString.call(object);
    if (objectType === '[object Object]') {
        output = {};
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                output[key] = cloneDeep(object[key]);
            }
        }
    } else if(objectType === '[object Array]') {
        output = [];
        var i = object.length;
        while (i--) {
            output[i] = cloneDeep(object[i]);
        }
    } else {
        output = object;
    }

    return output;
}

module.exports = cloneDeep;
