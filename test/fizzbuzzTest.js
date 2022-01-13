const { test } = QUnit;

QUnit.module("FizzBuzz", function () {
    test("is fizzbuzz function exists?", function (assert) {
        assert.ok(fizzbuzz, "Exists");
    });
    test("is fizzbuzz a function", function (assert) {
        assert.ok(typeof fizzbuzz === "function", "Function");
    });
    test("0 length sequence", function (assert) {
        assert.equal(fizzbuzz(0), "");
    });
    test("no modulo 3 or 5", function (assert) {
        const tomb = [1, 2, 4, 7, 8, 11, 13, 14];
        tomb.forEach(function (elem) {
            assert.equal(fizzbuzzValue(elem), elem);
        });
    });
    // test("2 length sequence", function (assert) {
    //     assert.equal(fizzbuzzValue(2), 2);
    // });
    // test("4 length sequence", function (assert) {
    //     assert.equal(fizzbuzzValue(4), 4);
    // });
    test("modulo 3 numbers", function (assert) {
        tomb = [3, 6, 9];
        tomb.forEach(function (elem) {
            assert.equal(fizzbuzzValue(elem), "fizz");
        });
    });
    // test("6 length sequence", function (assert) {
    //     assert.equal(fizzbuzz(6), "1,2,fizz,4,buzz,fizz");
    // });
    test("modulo 5 numbers", function (assert) {
        tomb = [5, 10];
        tomb.forEach(function (elem) {
            assert.equal(fizzbuzzValue(elem), "buzz");
        });
    });
    test("modulo 3 and 5 numbers", function (assert) {
        assert.equal(fizzbuzzValue(15), "fizzbuzz");
    });
    test("15 length sequence", function (assert) {
        assert.equal(
            fizzbuzz(15),
            "1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz"
        );
    });
});
