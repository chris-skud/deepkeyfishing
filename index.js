"use strict";

module.exports = function deepkeyfishing(obj) {
  var keyArr = [];
  if (!(obj !== null && typeof obj === 'object')) {  // not an object
    return '[]';
  }
  else {
    return _deepKeys(obj, '', keyArr);
  }
}

function _deepKeys(obj, path, keyArr) {
  
  for (var key in obj) {  // only enumerable props.
    
    if (typeof obj[key] === 'function') {break;}  // break if function
    
    var dot = '.';
    if (path === '') {dot = ''}  // if first level, no dot.

    if (typeof obj[key] === "object") {  // go deeper  
      if (isNaN(parseInt(key.charAt(0), 10))) {  // is key array index?
        _deepKeys(obj[key], path + dot + key, keyArr);
      }
      else {
        _deepKeys(obj[key], path + '[' + key + ']', keyArr)
      } 
    }
    else {  // can't go deeper, add to keyArr
      if (isNaN(parseInt(key.charAt(0), 10))) {
        keyArr.push(path + dot + key);
      }
      else {
        keyArr.push(path + '[' + key + ']');
      }
    }
  }
  return keyArr;
}