
const inFor = {
    id: 1,
    name: 'ngoanh',
    age: 22,
    gender: 'male',
};
// const id = inFor.id ;
// const name = inFor.id
const { id: soid, name: ten } = inFor;
console.log(soid, ten);
///////////////////////////////////////////////////

// rest ////////////////////////////////////////////
const inFor2 = Object.assign(Object.assign({}, inFor), { id: 2, name: 'nguyenA' });
console.log(inFor2);
console.log(inFor.id !== inFor2.id);
//spread //////////////////////////////////////////
const numberList = [1, 2, 3, 4, 5, 6];
const newList = [...numberList];
const newList2 = [...numberList, 7, 8];
console.log(newList2);

// Array destructuring /////////////////////////////
const fullName1 = 'Ngo anh';
const wordList = fullName1.split(' ');
const firstName1 = wordList[0];
const lassName1 = wordList[1];
console.log(firstName1 + lassName1);
const [firstName2, lassName2] = wordList;
console.log(firstName2 + lassName2);
///////////////////////////////////////////////////

// clone array of objects /////////////////////////
const StudentList = [
    Object.assign(Object.assign({}, inFor), { id: 3, name: 'nguyenB' }),
    Object.assign(Object.assign({}, inFor), { id: 4, name: 'nguyenC' })
];
const newList3 = [...StudentList];
newList3[0].name = 'nguyenD';
console.log(StudentList[0].name);
// console.log(newList3)
///////////////////////////////////////////////////

//
let abc = 'abc';
let abcd;
console.log(abc);
const conso = 1;
console.log(conso);
const people = {
    id: 1,
    name: "ngoanh"
};
//people.name = "ngoanh12" // error
function getStatusName(state) {
    console.log(state);
}
let s = 'active'; // let s: string
// getStatusName(s) // error
let d = 'active'; // or const s = 'active'
getStatusName(d);
let c = 'active';
getStatusName(c);
const inFor3 = {
    id1: 'h',
    name: 'd',
    gender1: 'female',
    grade: 'B',
};
console.log(inFor3);
const thongtin = {
    id: 1,
    name: 'anh',
    email: 'anh@gmail.com',
    phone: '0241212444'
};
console.log(thongtin);
/////////////////////////////////////////////////////////////////////


// Function  /////////////////////////////////////////////////////
function say() {
    console.log('Hi everyone!'); // trả về void
}
console.log(say());
function sum1(a, b) {
    return a + b;
}
console.log(sum1(2, 3));
// function sum2(a:number, b:number):number{
//     return a + b.toString()  lỗi type
// }
// console.log(sum1(2,3))
// function sum2(a:number, b:number):string{
//     return a + b.toString()
// }
// console.log(sum1(2,3))
///////////////////////////////////////////////////////////////


//optional parameter  //////////////////////////////////////////
function getLength(numberList) {
    return Array.isArray(numberList) ? numberList.length : 0;
}
console.log(getLength());
//default parameter ///////////////////////////////////////////
function getLength2(numberList = []) {
    return Array.isArray(numberList) ? numberList.length : 0;
}
console.log(getLength2());
// function getLength3(numberList?: number[] = []) {
//     return Array.isArray(numberList) ? numberList.length : 0; 
//     } error
///////////////////////////////////////////////////////////////////


// Enum ////////////////////////////////
var Status2;
(function (Status2) {
    Status2[Status2["PENDING"] = 0] = "PENDING";
    Status2[Status2["IN_PROGRESS"] = 1] = "IN_PROGRESS";
    Status2[Status2["DONE"] = 2] = "DONE";
    Status2[Status2["CANCELLED"] = 3] = "CANCELLED";
})(Status2 || (Status2 = {}));
const stats1 = Status2.PENDING;
const stats2 = 1;
const stats3 = 2;
console.log(Status2[0]); // 'PENDING'
console.log(Status2['DONE']); // 2
