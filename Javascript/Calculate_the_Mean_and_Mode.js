// https://www.codecademy.com/code-challenges/code-challenge-calculate-the-mean-and-mode-javascript
var statsFinder = function (array) {
    var sum = function (total, i) { return total + i; };
    var mean = 0;
    var mode = 0;
    var count = 0;
    var arrayQty = {};
    // Mean
    mean = array.reduce(sum) / array.length;
    // Mode
    /*
    This for checks if the element already exist in the arrayQty objetc.
    If not, its value becomes 1, otherwise it adds + 1
    */
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var i = array_1[_i];
        if (!arrayQty[i]) {
            arrayQty[i] = 1;
        }
        else {
            arrayQty[i] += 1;
        }
    }
    /*
    This for checks whether the value of each element in the object its greater than another elemente. Then, it saves
    the elemente in mode varivabel
    */
    for (var _a = 0, _b = array.reverse(); _a < _b.length; _a++) {
        var i = _b[_a];
        if (arrayQty[i] >= count) {
            mode = i;
            count = arrayQty[i];
        }
    }
    return [mean, mode];
};
console.log(statsFinder([500, 400, 400, 375, 300, 350, 325, 300, 100, 100, 100, 100]));
