/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanValues = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000
    };

    let total = 0;
    let prevValue = 0;

    // Traverse the string from right to left
    for (let i = s.length - 1; i >= 0; i--) {
        const currentValue = romanValues[s[i]];

        // If the current value is less than the previous one, subtract it
        if (currentValue < prevValue) {
            total -= currentValue;
        } else {
            total += currentValue;
        }

        // Update the previous value for the next iteration
        prevValue = currentValue;
    }

    return total;
};

module.exports = { romanToInt };
