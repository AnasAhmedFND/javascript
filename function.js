// function method...................................................................................//
// multipul/////////////////
let num = 5;
function multipul(number){
    sum = 2;
    for(i = 0; i <= number; i++){
        sum *=number;
        return console.log(sum);
        
    }

}
multipul(num);

let number = [22, 75, 10, 18, 17, 15];
function jorNum(num){
    if(num % 2 !==0){
        return num = 'even'
    }else{
        return num = "odd"
    }

}
console.log(jorNum(number));

let array = [22, 75, 10, 18, 17, 15];
function getOdd(even){
    sum = 0;
    for(i = 0; i <even.length; i++){
        if(even[i] % 2 ==0){
            sum +=even[i];
        }
    }
    console.log(sum);
    

}getOdd(array);





