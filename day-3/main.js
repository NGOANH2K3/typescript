//Generics ////////////////
var ds = {
    length: 4,
    map: '3',
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D',
    getName: function (value) {
        return value + 2;
    }
};
console.log(ds.length);
console.log(ds[0]);
console.log(ds.map);
console.log(ds.getName(2));
var cats = {
    miffy: { age: 10, breed: "Persian", coler: 'white' },
    boris: { age: 5, breed: "Maine Coon", coler: 'white' },
    mordred: { age: 16, breed: "British Shorthair", coler: 'white' },
};
console.log(cats.boris);
var todo = {
    title: "Clean room",
    completed: false,
};
console.log(todo);
var bob = {
    name: 'Bob'
    // `Omit` has removed age and location from the type and they can't be defined here
};
console.log(bob);
// keyof
// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person, property, property2) {
    console.log("Printing person property ".concat(property, " ").concat(property2, " : \"").concat(person[property], "\" ").concat(person[property2], "  "));
}
var person = {
    name: "Max",
    age: 27
};
printPersonProperty(person, "name", 'age'); // Printing person property name: "Max"s
//tuple: dataType/size/order
var skills2 = ['ngoanh', 25];
var skills3;
skills3 = [true];
// void type
var sum3 = function (a, b) {
    return a + b;
};
var hanfleLog = function (massage) {
    console.log('>>> massage: ', massage);
};
function type(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'number' && typeof b === 'string') {
        return a + b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
}
console.log(type(2, '3'));
console.log(type(2, 4));
console.log(type('ngo', 'anh'));
function giamgia(item, discount) {
    if (item > 0 && item <= 5) {
        discount = 5;
        return "gi\u1EA3m gi\u00E1 ".concat(discount, "%");
    }
    else if (item > 5 && item <= 10) {
        discount = 10;
        return "gi\u1EA3m gi\u00E1 ".concat(discount, "%");
    }
    else if (item > 10 && item <= 15) {
        discount = 20;
        return "gi\u1EA3m gi\u00E1 ".concat(discount, "%");
    }
    else if (item > 15) {
        discount = 15;
        return "gi\u1EA3m gi\u00E1 ".concat(discount, "%");
    }
    else {
        return 'không mua đòi giảm giá';
    }
}
console.log(giamgia(4));
console.log(giamgia(6));
console.log(giamgia(11));
console.log(giamgia(20));
console.log(giamgia(0));
function makeDate(mOrTimestamp, d, y) {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    }
    else {
        return new Date(mOrTimestamp);
    }
}
var d1 = makeDate(12345678);
var d2 = makeDate(5, 5, 5);
console.log(d1);
console.log(d2);
// const d3 = makeDate(1, 3);  Error
// class
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    Person2.prototype.getName = function () {
        return this.name;
    };
    return Person2;
}());
var person2 = new Person2("Jane");
console.log(person2.getName()); // person.name isn't accessible from outside the class since it's private
