function findPrime(max) {
    var list = new Int8Array(max);

    // initialize the list
    for (var i = 0; i < max + 1; i++) {
        list[i] = 1;
    }

    var result = [];

    for (var i = 2; i < max + 1; i++) {
        if (list[i] == 0) continue; // the number has been checked

        result.push(i);

        var m = 2;
        var c = i * m;
        while (c < max) {
            list[c] = 0;
            c = i * m++;
        }
    }

    return result;
}

if (typeof module != 'undeinfed') {
    module.exports = findPrime;

    if (typeof require != 'undefined' && require.main == module) {
        var stime = new Date();
        var result = findPrime(100000000)
        var etime = new Date();
        console.log(`${etime - stime} ms`);
    }
}

