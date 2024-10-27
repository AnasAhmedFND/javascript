// even and odd..................
let array = 33;
function evenNumber(number){
  if (number % 2 ==0){
    return num = 'even'

  }    
  else{
    return num = 'odd'
  }
}
console.log(evenNumber(array));

// inche to feet..................................
function incheToFeet(inche){
  return inche / 12;
}
console.log(incheToFeet(24));

// mils to km.........................
function milsToKm(mils){
  return mils / 1.6;
}
console.log(milsToKm(10));

// odd and even 
let arrayEven = [11, 12, 33, 53, 53, 44, 18];
function getOdd (num){
  let sum = 0;
  for (let i = 0; i <num.lenght; i++){
    if(num[i] % 2 != 0){

    sum +=num[i];
    }    

  }
  console.log(sum);
  
}

getOdd(array);


let array2 = [10, 20, 55, 31, 30];
function evenNum(number){
  let sum = 0;
  for(let i = 0; i <number.length; i++)
    if(number[i] % 2 ==0){
      sum +=number[i];
    }
      
    console.log(sum);
    
}
evenNum(array2)



