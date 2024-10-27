// problem -> 4 / spread..............................................................
let spreadArray1 = [1, 2, 3, 4];
let spreadArray2 = [5, 6, 7, 8];
let arraySpread = [...spreadArray1,...spreadArray2];
console.log(arraySpread);

// problem -> 5 Destructur....................................................
let person = { names: 'Anik', age: 16 , country:'Bangladesh'}
let number = [11, 22, 33, 44, 55];
let {names, age, country} = person;
let [one,,,two] = number;
console.log(names);
console.log(one,two);


// problem -> 6 Nested object..............................................................
let nestedObject = {
    names:'Anik',
    age:20 ,
    address:{
        home:'Netrokuna',
        country:'Bangladesh'
    }
}

console.log(nestedObject.address.home.toUpperCase());
console.log(nestedObject.address?.country.toUpperCase());

// problem -> 7 map & object................................................................
let students = [
    {names:"Anik", number: 55},
    {names:"Ronik", number: 45},
    {names:"Suliman", number: 35},
    {names:"Lukman", number: 25}
];
let newMap = students.map((stuitem) => stuitem.names.toUpperCase());
console.log(newMap);

// problem -> 8 filter.........................................................................
let arrayFilter = [
    {names:'A', number: 80},
    {names:'B', number: 80.00},
    {names:'C', number: 99},
    {names:'D', number: 99.5},
    {names:'E', number: 80.1}
]
let numbersItem = arrayFilter.filter((num) => {
    return num.number > 80;
})
console.log(numbersItem);

// problem -> 9 find................................................................
let arrayFind = [
    {names:'A', numbers: 89.9+5},
    {names:'B', numbers: 90},
    {names:'C', numbers: 99},
    {names:'D', numbers: 99.5},
    {names:'E', numbers: 90.01}
]
let findNumber = arrayFind.find((number) => number.numbers)
console.log(findNumber);

// problem -> 10 forEach() & map().....................................................
let products = [
    {names: 'book', price: 500},
    {names: 'leptop', price: 9000},
    {names: 'bike', price: 4444},
    {names: 'BMW', price: 55466}
]
let newForEach = products.forEach((priceitem) => {   
    console.log(`productname: ${priceitem.names}, price: ${priceitem.price} `);

})
let arrayName = ['Sihab', 'Anik', 'Shakib', 'Ripa'];
let arrayMap = arrayName.map((nam) => `Hello, ${nam}`);
console.log(arrayMap);

// problem -> 11 filter..................................................................
let productObj = [{apple: 60}, {apple:40}, {apple:10}, {apple:20}

]
let arrayFilter2 = productObj.filter((fruits) => {
    return fruits.apple > 10;

})
console.log(arrayFilter2);



