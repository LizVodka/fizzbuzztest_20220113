function fizzbuzz(n) {
    let tomb = [];
    // if (n == 1) {
    //     result = "1";
    // }
    // if (n == 2) {
    //     result = "1, 2";
    // }
    for (let index = 1; index <= n; index++) {
        tomb.push(fizzbuzzValue(index));
    }
    console.log(tomb.join(","));
    return tomb.join(",");
}

function fizzbuzzValue(n) {
    let result = "";
    if (n % 3 == 0 && n % 5 == 0) {
        result += "fizzbuzz";
    } else if (n % 3 == 0) {
        result += "fizz";
    } else if (n % 5 == 0) {
        result += "buzz";
    } else {
        result += n;
    }
    return result;
}
