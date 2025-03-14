// public modifier
// private modifier
// default, tất cả mọi thứ ( variables/function ) bên trong class là public, chúng ta có thể truy cập chung mà không bị giới hạn
// private ngược lạ 
class Employee2 {
    constructor(empCode, empName, gender) {
        this.empCode = empCode;
        this.empName = empName;
        // this.empAge = empAge;
        this.gender = gender;
    }
}
let emp = new Employee2(1234, 'aaa', 'male');
emp.empCode = 123;
emp.empName = 'ngo anh';
// emp.empAge = 12     error ( private )
console.log(emp);
// protected
// giống private, tuy nhiên, lớp con kế thừa sẽ không thể truy cập được 
class auther extends Employee2 {
    constructor(empName, address, empCode, gender) {
        super(empCode, empName, gender);
        this.address = address;
    }
}
let aut = new auther('b', 'ha noi', 123, 'male'); // phải theo thứ tự 
// aut.gender = lỗi (gender protected)
console.log(aut);
///////////////////////////////////////////////////////////////////////////////////////////
// setter và getter /////////////////////////////////////////////////////////////////////////
class Person3 {
    constructor(_age, firstName, lastName) {
        this._age = _age;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //getter
    get age() {
        return this._age;
    }
    //setter
    set age(age2) {
        if (age2 < 0 || age2 > 150) {
            throw Error("Invalid age");
        }
        this._age = age2;
    }
}
let person3 = new Person3(22, 'ngo', 'quocanh');
let checkAge = person3.age; //getter
person3.age = 69; // setter
// person2.setAge(69) //setter
console.log(">>> check age: ", person3); //getter
// person2.age = 26;
///////////////////////////////////////////////////////////////////////////////
// inheritance ///////////////////////////////////////////////////////////////
class Person4 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    describe() {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}
//để kế thừa 1 class, sử dụng keyword extends
class Employee3 extends Person4 {
    constructor(firstName, lastName, jobTitle) {
        // call the constructor of the Person class:
        super(firstName, lastName);
        this.jobTitle = jobTitle;
    }
    //overwrite
    describe() {
        return `${super.describe()} from parent - describe ngoanh287`;
    }
}
// let employee = new Employee('John','Doe','Front-end Developer');
//Employee kết thừa lại person => dùng đc method của parent
let employee = new Employee3('ngo', 'quoc anh', 'Web Developer');
console.log(employee.getFullName());
console.log(employee.describe());
///////////////////////////////////////////////////////////////////////////////
// static  ////////////////////////////////////////////////////////
class Circle {
    constructor() {
        this.test = 'test';
    }
    static calculateArea(radius) {
        return this.pi * radius * radius;
    }
}
Circle.pi = 3.14;
let t = new Circle;
console.log(`${Circle.calculateArea(5)}, ${t.test}`);
/////////////////////////////////////////////////////////////////////////
// abstrat class  /////////////////////////////////////////////////
class Employee5 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //normal method
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    compensationStatement() {
        return `${this.fullName} makes ${this.getSalary()} a month.`;
    }
}
// const e1 = new Employee5("ngo", "quocanh");   error không thể tạo mới đối với abstract class
class FullTimeEmployee extends Employee5 {
    constructor(firstName, lastName, salary) {
        super(firstName, lastName); //dùng super để kế thừa lại cha
        this.salary = salary;
    }
    // cần viết method này, vì nó được khai báo abstract ở trên
    getSalary() {
        return this.salary;
    }
}
class Contractor extends Employee5 {
    constructor(firstName, lastName, rate, hours) {
        super(firstName, lastName);
        this.rate = rate;
        this.hours = hours;
    }
    getSalary() {
        return this.rate * this.hours;
    }
}
const test1 = new FullTimeEmployee("Ngô", 'Quốc Anh', 10);
console.log(">>> test 1 : ", test1.getSalary());
const test2 = new Contractor('Ngô', 'Quốc Anh', 4, 5);
console.log('>>> test 2 : ', test2.getSalary());
