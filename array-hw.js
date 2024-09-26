
for (let i = 1; i<=100; i++){
    if (i % 2 == 0){
        console.log(i);
    }
}

//    two

for ( let i =0; i <=20; i++){
    console.log(i);
       
}

let bajur =[1,3,5,7,9,11,13,15,17,19];
for (let i = 0; i <bajur.length; i++) {
    console.log("Number is or - " + bajur[i]);
}

let jur =[2,4,6,8,10,12,14,16,18,20];
for (let i = 0; i <jur.length; i++) {
    console.log("Number is even - " + jur[i]);
}

// two/1
let num =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
for (i = 0; i <num.length; i++){
    if (i % 2 == 0) {
        console.log("num is or -- " + num[i]);
    }
}

for (i = 0; i <num.length; i++) {
    if (i % 2 !== 0) {
        console.log("Number is even -- " + num[i]);
    }
}

// three
let studentage = [18,22,19,24,21,20,23,26,17];
let addition = studentage.reduce((accumulator, currentvalue)=>{
    return accumulator + currentvalue
}, 0)

console.log(addition);

console.log(addition / studentage.length);

