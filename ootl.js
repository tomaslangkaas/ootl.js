var ootl = {
  removeClass: function(elm, cls){
    var w = ' ';
    elm.className = (w + elm.className + w)
      .replace(w + cls + w, w)
      //.split(w + cls + w)
      //.join(w)
      .slice(1,-1);
  },
  addClass: function(elm, cls){
    elm.className = elm.className + ' ' + cls;
  },
  elm: function(id){
    return document.getElementById(id) || {};
  },
  xhr: function(){
    //https://gist.github.com/jed/993585#gistcomment-876247
    try{
      return new(window.XMLHttpRequest || ActiveXObject)('MSXML2.XMLHTTP.3.0')
    }catch(e){}
  }
};
