/*移动端rem布局*/
(function (doc, win) {
  let docEl = doc.documentElement;
  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  let recalc = function () {
    let { clientWidth } = docEl;
    if (!clientWidth) return;
    if (clientWidth >= 750) {
      docEl.style.fontSize = '100px';
    } else {
      docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
    }
  };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

/*地址取参数*/
function getQueryVariable(variable) {
  let query = window.location.search.substring(1);
  let vars = query.split("&");
  for (let i=0; i < vars.length; i++) {
    let pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
}

/*日期转换*/
function formatDate (data) {
  //  date  2024-12-25
  if (data) {
    const y = data.substring(0, 4);
    const m = data.substring(5, 7);
    const d = data.substring(8, 10);
    return `${y}年${m}月${d}日`
  } else {
    return ''
  }
}

/*根据字典key取值*/
function formatDict (dict, key) {
  if (!dict || !dict.length || !key) {
    return ''
  }
  const tar = dict.filter(item => item.dictValue === key);
  if (tar.length) {
    return tar[0].dictLabel
  } else {
    return ''
  }
}
/*base64转file格式*/
function dataURLtoFile (dataurl, filename = 'file') {
  let arr = dataurl.split(',');
  let mime = arr[0].match(/:(.*?);/)[1];
  let suffix = mime.split('/')[1];
  let bstr = atob(arr[1]);
  let n = bstr.length;
  let u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], `${filename}.${suffix}`, {type: mime})
}

/*公共请求url*/
let ajaxApi = 'https://licensefront.ptcommon.com/stage-api/activiti/';   // test
