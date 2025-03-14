//Generics ////////////////

interface List<T, S> {
    length : number;
    [index: number]: T;  // Cho phép sử dụng chỉ mục số với giá trị kiểu T
    map: string;
    getName(value: number):S 
}

const ds: List<string, number> = {
    length : 4,
    map: '3',
    0: 'A',
    1: 'B',
    2: 'C',
    3: 'D',
    getName(value: number) {
        return value + 2
    }
    
};

console.log(ds.length)
console.log(ds[0])
console.log(ds.map)
console.log(ds.getName(2))
//////////////////////////////////////

// Utility types //////////////////////////

// record <keys, type>
type CatName = "miffy" | "boris" | "mordred";
 
interface CatInfo {
  age: number;
  breed: string;
  coler: string;
}
 
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian", coler:'white' },
  boris: { age: 5, breed: "Maine Coon", coler:'white' },
  mordred: { age: 16, breed: "British Shorthair", coler:'white' },
};
 
console.log(cats.boris)

// pick <type, keys>
interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }
   
  type TodoPreview = Pick<Todo, "title" | "completed">;
   
  const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
  };
   
console.log(todo)

// Omit<Type, Keys> 
interface Person {
    name: string;
    age: number;
    location?: string;
  }
  
  const bob: Omit<Person, 'age' | 'location'> = {
    name: 'Bob'
    // `Omit` has removed age and location from the type and they can't be defined here
  };

  console.log(bob);

  
  // keyof
  // `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
  function printPersonProperty(person: Person, property: keyof Person, property2: keyof Person) {
    console.log(`Printing person property ${property} ${property2} : "${person[property]}" ${person[property2]}  `);
  }
  
  let person = {
    name: "Max",
    age: 27
  };
  
  printPersonProperty(person, "name", 'age'); // Printing person property name: "Max"s


//tuple: dataType/size/order

let skills2: [string, number] = ['ngoanh', 25];

let skills3: [boolean? , string?, number?];

skills3 = [true];

// void type

const sum3 = (a:number, b:number): number => {
    return a+b
}

const hanfleLog = (massage:string):void => {
    console.log('>>> massage: ' , massage )
}

// if else

type setType = number | string | boolean ;
function type(a:setType , b:setType){
    if(typeof a === 'number' && typeof b === 'number'){
        return a+b
    }
    else if (typeof a === 'number' && typeof b === 'string'){
        return a + b
    }
    else if (typeof a === 'string' && typeof b === 'string'){
    return a.concat(b)
    }
}
console.log(type(2,'3'))
console.log(type(2,4))
console.log(type('ngo','anh'))

function giamgia(item:number, discount?: number){
    if (item>0 && item <=5){
        discount = 5
        return `giảm giá ${discount}%`
    } else if(item>5 && item <=10){
        discount = 10
         return `giảm giá ${discount}%`
    } else if(item>10 && item <=15){
        discount = 20
         return `giảm giá ${discount}%`
    } else if (item > 15){
        discount = 15
         return `giảm giá ${discount}%`
    } else {
        return'không mua đòi giảm giá'
    }
}

console.log(giamgia(4))
console.log(giamgia(6))
console.log(giamgia(11))
console.log(giamgia(20))
console.log(giamgia(0))


// function overloading
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
console.log(d1)
console.log(d2)
// const d3 = makeDate(1, 3);  Error

// class
class Person2 {
    private name: string;
  
    public constructor(name: string) {
      this.name = name;
    }
  
    public getName(): string {
      return this.name;
    }
  }
  
  const person2 = new Person2("Jane");
  console.log(person2.getName()); // person.name isn't accessible from outside the class since it's private