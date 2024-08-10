 //0-9
 var arr=[];
 for(var i=0;i<10;i++){
    arr.push(i);
 }

//9-0
for(var i=9;i>=0;i--){
    arr.push(i);
}
console.log(arr);

//nested for loop
function mult(arr){
    var product=1;
    
for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr[i].length;j++){
        product=product*arr[i][j];
    }
}

    return product;
}
 var product=mult([[1,2],[3,4],[5,6,7]]);
 console.log("The product is :"+ product);