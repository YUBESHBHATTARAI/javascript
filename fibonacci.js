//Write a js code to display fibonacci series 
let a=0;
let b=1;
let c;
for(let i=0;i<=20;i++){
    c=a+b;
    a=b;
    b=c;
    if(c<20)
    {

        console.log(c);
    }
}
