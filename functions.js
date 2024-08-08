/* syntax for Function
   functation name (  ){
   code to be executed;
   }
*/
// code for functions
function explain(){
  console.log("hy,peter");
}
explain();

//  functions for subtraction
 function sub(a,b){
   
   console.log(a-b);
 }
    sub(10,5);

//  functions for conditional(if) statement
function  trueorFalse(wasthatTrue){
   if(wasthatTrue){
      return "yes! it is";
   }
   return "no! it is not";
}
console.log(trueorFalse(true));


//  functions for equality operator
function  variable(num){
   if(num==10){
      return "it is equal";
   }
   return "no,it isn't";
}
console.log(variable(15));



function boolean(a,b){
   return a>b;
}
console.log(boolean(20,25));