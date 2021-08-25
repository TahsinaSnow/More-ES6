//variable
const hubby = 'Emon';
let phone = 'iphone 15';
phone = 'Sumsang Galaxy s17';

//template string
const myNotes = `I am mojnu of${hubby}. I dont Have a laili. I have a ${phone}.`
console.log(myNotes);

//default parameter
function maxNumber(array = []){
    const max = Math.max(...array);
    return max;
}
const biggest = maxNumber();
console.log(biggest);

//arrow function
// function square(x){
//     return x * x;
// }

const square = x => x * x;
console.log(square(8));