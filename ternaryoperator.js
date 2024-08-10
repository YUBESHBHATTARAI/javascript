
/* 
  syntax for ternary operator :-
  condition ? expressionIfTrue : expressionIfFalse
    */

/* code related to ternary operator  */
let  a=20;
let b=30;
console.log("the largest number is ",a>b?a:b);


//using ternary operator in function
function checkSign(num){
   
  return  num > 0 ? "positive" :num<0?"negative":"zero";
}
console.log(checkSign(10));