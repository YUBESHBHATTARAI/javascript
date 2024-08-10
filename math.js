  /*js using math.random
   [math.random] : It generates random number ranging from 0 to 1(it doesn't generate 1,instead number just  lessthan 1 ). It doesn't take any argument.

   [math.floor]:It is a built-in function in JavaScript that returns the largest integer less than or equal to a given number. It's commonly used to round down numbers.
     For example: Math.floor(5.87) returns 5, which is the largest integer less than or equal to 5.87.

  */


    //program
    function num(min,max){
        return Math.floor(Math.random()*(max-min+1))+min;
    }
    var result=num(1,9);
    console.log(result);