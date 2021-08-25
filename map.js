const numbers  = [4, 6, 8, 10];
const output = [];

// function doubleOld(number){
//     return number * 2;
// }

const doubleIt = number => number * 2;


for(const number of numbers){
    const result = doubleIt(number);
    output.push(result);
}
//console.log(output);

//loop through each element
//for each element diye provided function ke call korchi
//result for each element  ekta array er moddhe push korchi

//const output = numbers.map(doubleIt);

const output = numbers.map(number => number *2);
console.log(output);

//square
const squares =  numbers.map(x => x * x);
console.log(squares);