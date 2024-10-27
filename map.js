// // problem-1...................................................
// // Nested////////////////
// let person = {
//     firstName:'Anas',
//     age:20,
//     address:{
//         road:'Indira Road',
//         division:'Dhaka'
//     }
// }
// console.log(person.firstName);
// // problem-2.....................................................
// // map()///////////////////
// let arrayMap = [1, 2, 3, 4, 5];
// sum = 0;
// let newArrayMap = arrayMap.map((item) =>sum +=item);
// console.log(sum);

// // problem-3...................................................
// // object in map//////////////////
// let array = [
//     {names:'Anas' , age: 20 },
//     {names:'Anik', age: 22},
//     {names:'Rakib', age: 23},
//     {names:'Ripa', age: 20},
//    { locations:{
//     rode:'Indira Road',
//     division:'Dhaka'

//     }}  
// ]
// let forEachArray = array.forEach((num) => {
//     console.log(num.locations);
    

// })

// // let newArray = array.map((item2) =>{
// //     console.log(item2.address2);

// // })


// // problem-4.........................................
// // forEach//////////////////////////

// let filterArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArrayFilter = filterArray.filter((index) => {
//     // return index % 2 !== 0;
//     return index % 2 == 0;
// })
// console.log(newArrayFilter);


// // problem-5......................................................................
// let arryaFilters = [
//     {nam:'Anas', age: 20},
//     {nam:'Anik', age: 22},
//     {nam:'Hasib', age: 20},
//     {nam:'Habibulla', age: 23}
// ]

// let selectFilter = arryaFilters.filter((itemse) => {
//     return itemse.nam.endsWith('s') ;
// })
// console.log(selectFilter);

// // problem-6.............................................................
// // find/////////////////////////
// let arrayFind = [
//         {age: 20},
//         {age: 22},
//         {age: 20},
//         {age: 19} ,
//         {age: 17},
//         {age: 21}   
// ]
// let newArrayFind = arrayFind.find((olde) => {
//     // return olde.age < 20; 
//     return olde.age > 20;      

// })
// console.log(newArrayFind);

// p=1 / nested.........................
let array = {
    firstName:'Anas',
    lastNmae:'Ahmed',
    address:{
        rode:'Indira Road',
        division:'Dahka'
    }
}
// console.log(array.address);
console.log(array.address?.division);

let array2 = [1, 2, 3, 4, 5];
sum = 0;
let array2Map = array2.map((num) => sum +=num)
console.log(sum);

// p=3 Object in map........................................
let object =[ 
    {nam:'Anik',age:23,},
   { nam:'Rasel', age:20,}
]
// let objectMap = object.map((item) => {
//     console.log(item.nam);   
   
// })

let forEachArray = object.forEach((list) => {
    console.log(list.nam.toUpperCase());
    

})


// p=5 filter....................................
let number = [
    {nam:'Roni', age:24},
    {nam:'Robin', age:26},
    {nam:'Asik', age:20},
    {nam:'Akash', age:19}
]
// let newFilterArray = number.filter((max) => {
//     return max.nam.startsWith('R');   
// })
// console.log(newFilterArray);
let arrayFine = number.find((mix) => {
    return mix.age > 20;

})
console.log(arrayFine);



