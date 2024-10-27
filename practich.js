// problem-sub-string.......................................................................................//
// toUpperCase///////////////////
let uppercase = 'Bangladesh is a smoll country';
let uppercase2 = ' and Bangladesh is a beautifull';
let addUppercase = uppercase.concat(uppercase2);
console.log(addUppercase.toUpperCase());

// toLowercase//////////////////
let firstName = 'ANAS';
let lastName = 'AHMED';
let fullName = firstName.concat(lastName);
console.log(fullName.toLowerCase());

// indexof//////////////////////
let country = 'Bangladesh is a beautifull';
let country2 = 'india is big country'
let addCountry = country.concat(country2);

console.log(addCountry.indexOf('big'));

// includes///////////////////////
let includesString = 'our country is a poor state';
console.log(includesString.includes('poor'));

// startswith////////////////////
let start = "one day bangladesh will had a big country";
console.log(start.startsWith('o'));

// endWith////////////////////////
let endString = 'Bangladesh will be a big country';
console.log(endString.endsWith('y'));

// last indexof///////////////////
let lastIndex = 'Bangladesh is a smoll country now and will be a big country is is';
console.log(lastIndex.lastIndexOf('a'));

// split/////////////////////////
let splits = 'bangladesh is a poor country';
console.log(splits.split(' '));

// slice////////////////////////]
let slices = 'Bangladesh many pepopul country';
console.log(slices.slice(10, 23));

// join////////////////////////////
let join1 = ['anas', 'shimu', 'habibulla', 'pulok'];
console.log(join1.join("-"));

// array method....................................................................................//
// length////////////////////
let arrayLength = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrayLength);

// toString//////////////////
let arrayString = 26;
let arrayX = arrayString.toString();
console.log(typeof (arrayX));

// at/////////////
let arrayAt = [1, 3, 4, 5, 6];
let at = arrayAt.at(2)
console.log(at);

// join////////////
let arrayJoin = ['apple', 'banana', 'mango', 'orange'];
let join = arrayJoin.join("-");
console.log(join);

// pop/////////////
let arrayPop = [1, 3, 4, 5, 6, 7, 8, 9];
arrayPop.pop();
console.log(arrayPop);

// push///////////
let arrayPush = ['Anas', 'habibulla', 'yasine', 'pulok'];
arrayPush.push("shimu");
console.log(arrayPush);

// shift/////////////
let arrayShift = ['mango', 'apple', 'banana', 'orange', 'jecfrut'];
 arrayShift.shift();
console.log(arrayShift);

// unshift////////////////
let arrayUnShift = ['mango', 'apple', 'banana', 'orange', 'jecfrut'];
arrayUnShift.unshift('black-beriy');
console.log(arrayUnShift);

// delete/////////////
let arrayDelete = ['Anas', 'Habibulla', 'shimu', 'pulok', 'Anik'];
delete arrayDelete[1];
console.log(arrayDelete);

// concat//////////////
let x = [1, 2, 3, 4, 5, ]
let y = [6, 7, 8, 9];
let xy = x.concat(y);
console.log(xy);

// flat////////////
let arrayFlat = [[1, 3, 4], [5, 6,7], [8, 9, 10]];
let zx = arrayFlat.flat();
console.log(zx);

// splice//////////////
let arraySplice = [10, 20, 40, 50, 22, 44, 30, 56];
let splices = arraySplice.splice(2, 4);
console.log(splices);

// slice//////////////
let arraySlice = [11, 22, 33, 44, 55, 66, 77];
let slice = arraySlice.slice(1, 5);
console.log(slice);
console.log(arraySlice.at('11'));








