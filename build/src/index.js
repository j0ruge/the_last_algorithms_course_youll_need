"use strict";
function sum_char_codes(n) {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i);
    }
    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i);
    }
    return sum;
}
console.log(sum_char_codes('Hello World'));
console.log(sum_char_codes('GabirU Nervoso! ಠ_ಠ'));
console.log(sum_char_codes('GabirU Flutuante! ಠ_ಠ'));
//# sourceMappingURL=index.js.map