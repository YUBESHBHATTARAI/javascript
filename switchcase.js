const prompt = require('prompt-sync')();
let a=prompt("Enter your feeling = ");

switch(a){
    case "love":
        console.log("I love you too");
        break;
    case "hate":
        console.log("I hate you too");
        break;
    case "kill":
      console.log("I will you too");   
      break;
      default:
        console.log("i don't care about you")
}