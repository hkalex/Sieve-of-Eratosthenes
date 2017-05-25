var hello = require('./build/Release/hello');

var cnt = 100000000;

var arr = new Array(cnt);
for (var i = 0; i < cnt; i++) {
    arr[i] = i;
}

var stime = new Date();
var result = hello.calculateSD(arr);
var etime = new Date();
console.log(result);
console.log(etime - stime);
