let rollNumbers = [20,11,15,13,14,2,1,55,,8,74,66];

console.log(rollNumbers[5]);
console.log(rollNumbers);
let run = rollNumbers.pop();
console.log(rollNumbers);

let max = rollNumbers.pop();
console.log(rollNumbers);

let names =['anik','Ronik','Riad','Ripa'];

console.log(names[3]);
names.push('anas');
console.log(names);
names.push('rohim','korim','abdulla');
console.log(names)
let nameed = names.reverse();
console.log(nameed)


// parseInt() method
let px = parseInt("10.00");
console.log(px)

let py = parseInt("anasahmed",16);
console.log(py)

let pa = parseInt(22);
console.log(pa)

let pb = parseInt(10.55);
console.log(pb)

let pc = parseInt("23 66 80");
console.log(pc)
// parseFloat() Method
let fa =parseFloat("10");
console.log(fa);
 
let fb = parseFloat("10.55");
console.log(fb)

let fc = parseFloat("he was 74");
console.log(fc);

// problem-one............................//
console.log(Math.pow(2, 4));

// problem-two.......................................//
let firstName = 'Anas'
let lastName = 'Ahmed'
let fullName = `his name is ${firstName} ${lastName}`
console.log(fullName);

// problem multiline//////////////////////////////////
let multiLine = `=this is a first name.
 =this is a second line.`
console.log(multiLine);
// problem arrou function..............................//
let names2 = (fullName) =>fullName;
console.log(names2('Anas Ahmed'));

// math method.................................................................//
// math-abs........................//
let abs =-10
console.log(Math.abs(abs));

// math-pow...............................//
let power = 5;
console.log(Math.pow(power, 3));

// math-round.....................................//
let round = 14.66;
console.log(Math.round(round));

// math-ceil..........................................//
let ceil = 9.14;
console.log(Math.ceil(ceil));

// math-floor............................................//
let floor = 12.78;
console.log(Math.floor(floor));

// math-random...............................................//
console.log(Math.random());

// math-min....................................................//
console.log(Math.min(10, 3, 4, 5, 6));

// Math.max......................................................//
console.log(Math.max(54, 88, 22, 14 ));

// sprid-oparator...................................................//
let spridArray = [1, 2, 3];
let newSpridArray = [...spridArray,4, 5, 6];
console.log(newSpridArray);
// copy-sprid sestem........................
let copySprid = [...spridArray];
console.log(copySprid);

// DeStructur-method....................................................//
let obj = {myFirstName:'Anas', myLastName:'Ahmed', age: 20, country:'Bangladesh'};
let {division = 'Dhaka'} = obj;
console.log(division);

// DeStructur-array........................................................//
let studentsName = ['Anas', 'Shimu', 'Habibulla', 'pulok', 'Anik'];
// let [st1, st2] = studentsName;
// let {[0]:st1, [2]:st2} = studentsName
let [st1,,,st2] = studentsName;
console.log(st1, st2);

// Destructur ...rest.........................................................//
let someName = ['Anas', 'Shimu', 'Habibulla', 'pulok', 'Anik'];
let [nm1, nm2,...rest] = someName;
console.log(rest);























