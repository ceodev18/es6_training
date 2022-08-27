//some anotations from ES6
// var sample = 10;
// {
//     let sample = 2;
//     console.log(sample);
// }
//console.log(sample);
//------------------------------------------------------------

// var sample = 10
// {
//     const sample = 2;
//     console.log(sample);
//     sample = 10; // cant asign value to constant
//     console.log(sample);
// }
// console.log(sample);
//------------------------------------------------------------
//Arrow functions are not hoisted. They must be defined before they are used.

//const x = (x, y) =>{return x * y};
//console.log(x(4,6));
let  list = [1,2,4,5,6];
for(item of list){
    console.log(item);
}