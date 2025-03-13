// object destructuring ///////////////////////////////
interface Student {
    readonly id: number;
    fullName?: string; // optional 
    firstName?: string; // optional
    lassName?: string; // optional
    name: string;
    age: number;
    gender: string;
}

const inFor = {
    id: 1,
    name: 'ngoanh',
    age: 22,
    gender: 'male',
};

// const id = inFor.id ;
// const name = inFor.id
const {id: soid, name: ten} = inFor
console.log(soid , ten)
///////////////////////////////////////////////////

// rest ////////////////////////////////////////////
const inFor2 = {
    ...inFor,
    id: 2,
    name: 'nguyenA',
}
console.log(inFor2)
console.log(inFor.id !== inFor2.id)

//spread //////////////////////////////////////////
const numberList = [1,2,3,4,5,6];
const newList = [...numberList];
const newList2 = [...numberList, 7, 8]

console.log(newList2)


// Array destructuring /////////////////////////////
const fullName1 = 'Ngo anh'
const wordList = fullName1.split(' ')

const firstName1 = wordList[0]
const lassName1 = wordList[1]
console.log(firstName1 + lassName1)

const [firstName2, lassName2] = wordList
console.log(firstName2 + lassName2)
///////////////////////////////////////////////////


// clone array of objects /////////////////////////
const StudentList: Student[] = [
    {
        ...inFor,
        id: 3,
        name: 'nguyenB',
        // fullName: "nguyen van B",
        // firstName: "nguyen",
        // lassName: "van B",
        
    },
     
    {
        ...inFor,
        id: 4,
        name: 'nguyenC',
        // fullName: "nguyen van C",
        // firstName: "nguyen",
        // lassName: "van C"
    }
];

const newList3 = [...StudentList];
newList3[0].name = 'nguyenD'

console.log(StudentList[0].name)
// console.log(newList3)
///////////////////////////////////////////////////


//
let abc = 'abc'
let abcd: 'abcd' 
console.log(abc)
const conso = 1
console.log(conso)

const people = {
    id: 1,
    name: "ngoanh"
} as const
//people.name = "ngoanh12" // error

function getStatusName(state: 'active') {
    console.log(state);
    }
    let s = 'active'; // let s: string
    // getStatusName(s) // error
    
    let d: 'active' = 'active'; // or const s = 'active'
    getStatusName(d);
    

    let c = 'active';
    getStatusName(c as 'active')


// Union type /////////////////////////////////////////////////

type Status = 'active' | 'inactive';
type ProductStatus = 0 | 1 | 2 | 3;
type StudentId = number | string;
interface Student1 {
id1: number | string;
name: string;
gender1: 'male' | 'female';
grade: 'A' | 'B' | 'C' | 'D' | 'E';
}

const inFor3:Student1  = {
    id1: 'h',
    name: 'd',
    gender1: 'female',
    grade: 'B',
}
console.log(inFor3)
///////////////////////////////////////////////////////////


// Intersection type ///////////////////////////////////////////
interface BusinessPartner {
    name: string;
    // name: number; error
    credit?: number;
    }
interface Identity {
    id: number;
    name: string;
    }
interface Contact {
    email: string;
    phone: string;
    }
type Employee = BusinessPartner & Identity & Contact;
type Customer = BusinessPartner & Contact;

const thongtin: Employee = {
    id: 1,
    name: 'anh',
    email: 'anh@gmail.com',
    phone: '0241212444'
}

console.log(thongtin)
/////////////////////////////////////////////////////////////////////


// Function  /////////////////////////////////////////////////////
function say() {
    console.log('Hi everyone!')  // trả về void
}
console.log(say())

function sum1(a:number, b:number){
    return a+b 
}
console.log(sum1(2,3))

// function sum2(a:number, b:number):number{
//     return a + b.toString()  lỗi type
// }
// console.log(sum1(2,3))

// function sum2(a:number, b:number):string{
//     return a + b.toString()
// }
// console.log(sum2(2,3))
///////////////////////////////////////////////////////////////


//optional parameter  //////////////////////////////////////////
function getLength(numberList?: number[]) {
    return Array.isArray(numberList) ? numberList.length : 0;
    }
console.log (getLength())

//default parameter ///////////////////////////////////////////
function getLength2(numberList: number[] = [] ) {
    return Array.isArray(numberList) ? numberList.length : 0;
    }
console.log(getLength2())

// function getLength3(numberList?: number[] = []) {
//     return Array.isArray(numberList) ? numberList.length : 0; 
//     } error

///////////////////////////////////////////////////////////////////

// Enum ////////////////////////////////
enum Status2 {
    PENDING, // 0
    IN_PROGRESS, // 1
    DONE, // 2
    CANCELLED, // 3
    }
    
    const stats1: Status2 = Status2.PENDING;
    const stats2: Status2 = 1;
    const stats3: Status2 = 3;
   
    console.log(Status2[0]); // 'PENDING'
    console.log(Status2['DONE']); // 2

        