
//làm việc với number
function isPositive(n: number){
   if (n>0) {
    console.log(true)
    }
    else{
        console.log(false)
    }
}
//correc    
isPositive(4)
// error
// isPositive("bốn")


const sum = (x:number, y:number) => {
    return x+y
}

console.log(sum(3,5))



// làm việc với string
const fullName: string = "Ngô Quốc Anh";
console.log('Hello: ', fullName);


const firstName:string = 'ngo'
const lastName:string = "anh"

console.log(firstName+lastName)


const so2:number = 2
const so:number = 1;
const chu:string = '2';

console.log(so == so2)
// console.log(so == chu) error
