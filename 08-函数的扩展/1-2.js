
function fetch(url, {method = 'GET'} = {}) {
    console.log('函数参数默认值会影响arguments.length', arguments.length);
    console.log(method, url);
}

fetch('http://zhanghuiliang.cn');