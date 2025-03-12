"use strict";
//làm việc với number
function isPositive(n) {
    if (n > 0) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
//correc    
isPositive(4);
// error
// isPositive("bốn")
const sum = (x, y) => {
    return x + y;
};
console.log(sum(3, 5));
// làm việc với string
const fullName = "Ngô Quốc Anh";
console.log('Hello: ', fullName);
const firstName = 'ngo';
const lastName = "anh";
console.log(firstName + lastName);
const so2 = 2;
const so = 1;
const chu = '2';
console.log(so == so2);
// console.log(so == chu) error
