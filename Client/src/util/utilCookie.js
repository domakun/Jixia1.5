//获取cookie
export function getCookie(name) {
  // var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  var arr, reg = new RegExp("(^| )" + name);
  if (arr = document.cookie.match(reg))
    return (arr);
  else
    return null;
}

//设置cookie,增加到vue实例方便全局调用
export function setCookie (c_name, value, day) {//day为number 表示想设置多少天
  var exdate = new Date();
  var expiredays = parseInt(day);
  exdate.setDate(exdate.getDate() + expiredays);
  // document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
  document.cookie = c_name + "=" + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
};

//删除cookie
export function delCookie (name) {
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval = getCookie(name);
  if (cval != null){
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    return true
  }
};
