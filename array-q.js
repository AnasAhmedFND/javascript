// one
let strings =['apple','banana','cherry'];
console.log(strings)
// two
let numbers =[10,20,30,40,50,];
console.log(numbers[2])
// three
let colors =['red','green','blue'];
let added = colors.push('white'+'-'+'red');
let addedTwo = colors.push('white'+'-'+'green');
let addedthree = colors.push('white'+'-'+'blue');
console.log(colors)
// four
let numberelement =[1,2,3,4,5];
let max = numberelement.pop();
console.log(numberelement)
// five
let fruits = ['apple','banana'];
fruits.push('grape');
console.log(fruits)
// six
let removeelement = ['car','bike','bus'];
let remove = removeelement.shift();
console.log(remove);
console.log(removeelement)
// seven
let carrier = ['boat','ship'];
carrier.unshift('train','plane');
console.log(carrier)
carrier.splice('chical');
console.log(carrier)
// eight
let enemals = ['dog','cat','bird']
delete enemals[1];
console.log(enemals)
// nine
let alfa = [1,2,3,4,5,6];
let deleted = alfa.splice(2, 2);

console.log(alfa)
// ten
let classesNum =[1,2,3,4,5,6,7,8,9]
let res = classesNum.findIndex(findThree);
function findThree(value) {
    return value === 5;
}
console.log(res);