//NO- 1
let fruitsX =['apple','banana','cherry'];
let fruitsY = fruitsX.toString();
console.log(typeof fruitsY);
//NO- 2
let numbers =[10,20,30,40,50,];
let numbersZ = numbers.at(2);
console.log(numbersZ);
//NO- 3
let colors =['red','green','blue'];
let colorsZ = colors.join('-');
console.log(colorsZ);
//NO- 4
let numberelement =[1,2,3,4,5];
let max = numberelement.pop();
console.log(numberelement)
//NO- 5
let fruits = ['apple','banana'];
fruits.push('grape');
console.log(fruits)

//NO- 6
let removeelement = ['car','bike','bus'];
let remove = removeelement.shift();
console.log(remove);
console.log(removeelement)
//NO- 7
let carrier = ['boat','ship'];
carrier.unshift('train','plane');
console.log(carrier)
carrier.splice('chical');
console.log(carrier)
//NO- 8
let animals = ['dog','cat','bird']
delete animals[1];
console.log(animals)
//NO- 9
let mergeone = [1,2,3];
let mergetwo = [4,5,6];
let mergeadd = mergeone.concat(mergetwo);
console.log(mergeadd);
//NO- 10
let classesNum =[1,2,3,4,5,6,7,8,9]
let res = classesNum.findIndex(findThree);
function findThree(value) {
    return value === 5;
}
console.log(res);
//NO- 11 
let alp = ["a", "b", "c", "d", "e", "f"];
let alpZ = alp.splice(2, 2);

console.log(alp);

//NO- 12
let longString =["apple" ,"banana", "cherry", "date", "elderberry", 'fig' ,"grape" ,'honeydew', "diwi", "lemon", "mango", "nectarine", "prange", "papaya", "quince", "raspberry", "strawberry", "tangerine", "ugli", "vine", "watermelon", 'yam', 'xucchini', "apricot", "blackberry" ,"cantaloupe", "elderberry", "fennel", "grapefruit", "honeycrisp", "jackfruit", "kumquat", "lime" ,"melon", "nectar", "oive", "peach", "pear", "plum", "pomegranate", "rhubarb", "starfruit" ,"tomato", "vamilla"];
console.log(longString);
//NO- 13
let fruitsOne=["apple","banana","cherry","date","fig"];
fruitsOne.pop();
console.log(fruitsOne);
let updaredFruits=["apple","banana","cherry","date"]
updaredFruits.pop();
console.log(updaredFruits);
//NO- 14
let enemal =["dog", "cat", "fish", "bird"];
console.log(enemal.join());

//NO- 15
let fruithypen = ["apple", "orange", "banana", "grape"];
console.log(fruithypen.join("-"));

//NO- 16
const alf = ["b", "c", "d"];
    alf.splice(0,2,"a", "b", "c");
    console.log(alf);

//NO- 17
let sev = [1,2,3,4,5];
delete sev[3];
console.log(sev);
//NO- 18
let numM = [1,2,3];
let numN = [4,5,6];
let numadd = numM.concat(numN);
console.log(numadd);
let numX = numadd.slice(0,4);
console.log(numX);
//NO- 19
const stringsX = ["a", "b", "c", "d", "e"];
stringsX.splice(1,2,"x","y");
console.log(stringsX);
// No- 20
let numberX = [10,20,30,40,50];
numberX.slice(1,4);
console.log(numberX);

// No- 21
let arrayS = [1,2,3,4,5];
let arrayK =arrayS.toString();
console.log(typeof(arrayK));
let arrayZ = arrayK.split(" ");
console.log(arrayS);

// NO- 22
let arrayA = ["a", "b", "c", "d", "e", "f"];
console.log(arrayA.at(0));
console.log(arrayA.at(5));

// NO- 23
let fruitstwo = ["apple", "banana", "cherry", "date"];
fruitstwo.splice(1,1);
console.log(fruitstwo);

// No- 24
let nomArray = [10,20,30,40,50];
nomArray.splice(3);
console.log(nomArray);


// for loop dia jug phol bahir korar sestem
let array = [10, 20, 30, 40, 50];
let result = 0;

for (let i = 0; i <array.length; i++){
    result += array[i]
    
}
console.log( "for loop in array item addition -" + result );

