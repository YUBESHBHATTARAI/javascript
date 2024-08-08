function switchCase(value){
    var answer = "";
    switch(value){
        case 1:
            answer="alpha";
            break;
        case 2:
            answer="beta";
            break;
         case 3:
            answer="Gamma";
            break;
        case 4:
            answer="delta";
            break;
        default:
            answer="UV";
    }
  return answer;
}
console.log(switchCase(10));