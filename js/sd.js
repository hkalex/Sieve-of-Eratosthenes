function findStdDev(arr) {
    var len = arr.length;
    var i = 0;

    // find the average
    var avg = 0;
    for (i = 0; i < len; i++) {
        avg += arr[i];
    }
    avg /= len;

    // find the sd
    var result = 0;
    for (i = 0; i < len; i++) {
        result += Math.pow((arr[i] - avg), 2);
    }
    result /= len;
    result = Math.sqrt(result);
    return result;
}


if (typeof module != 'undeinfed') {
    module.exports = findStdDev;

    if (typeof require != 'undefined' && require.main == module) {

        var cnt = 100000000;
        var arr = new Uint32Array(cnt);
        for (var i = 0; i < cnt; i++) {
            arr[i] = i;
        }

        //var arr = [9, 2, 5, 4, 12, 7, 8, 11, 9, 3, 7, 4, 12, 5, 4, 10, 9, 6, 9, 4];
        var startTime = new Date();
        var sd = findStdDev(arr);
        var endTime = new Date();
        console.log(sd);
        console.log(`${endTime - startTime} ms`);
    }
}

