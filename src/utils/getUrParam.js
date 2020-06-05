
// 封装截取url上code值
export function GetUrlParam (name) { // 获取url指定参数
  var reg = new RegExp('(^|&)' + name + ' =([^&]*)(&|$)')
  const url = window.location.href
  var r = url.subter(1).match(reg) // 匹配目标参数
  if (r != null) return unescape(r[2])
  return null //  返回参数
}
