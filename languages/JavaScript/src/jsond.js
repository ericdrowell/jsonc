var jsond = (function() {
  function isString(obj) {
      return Object.prototype.toString.call(obj) == '[object String]';
  }

  function getVal(val, params) {
    if (isString(val) && val.indexOf('$') === 0) {
      return params[val.substring(1)];
    }
    else {
      return val;
    }
  }

  var interp = function(logic, params) {
    var key, val, ret;

    for (key in logic) {
      val = logic[key];

      switch(key) {
        case 'if':
          if (interp(val[0], params)) {
            return interp(val[1], params);
          }
          else {
            return interp(val[2], params);
          }
          break;
        case 'eq': 
          return getVal(val[0], params) === getVal(val[1], params);
          break;
        case 'ret':
          return val[0];
          break;
      }
    }
  };

  return interp;
})();