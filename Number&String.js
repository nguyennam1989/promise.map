var promise = require('bluebird');
function wait(miliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + miliSeconds);
}
var arr = [1,3, 'FF', 5, 7];
console.time('nonblocking');
promise.map(arr, function(item) {
    if ( !isNaN(item))
    item=Math.pow(item,2);
    console.log(item);

    }).catch(function(err){
    console.log(err);
});
console.timeEnd('nonblocking');


