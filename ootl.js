var ootl = {
  removeClass: function(elm, cls){
    var w = ' ';
    elm.className = (w + elm.className + w)
      .split(w + cls + w)
      .join(w)
      .slice(1,-1);
  },
  addClass: function(elm, cls){
    elm.className = elm.className + ' ' + cls;
  },
  elm: function(id){
    return document.getElementById(id) || {};
  }
};
