

var myfriend={
"name":"peter",
"age":20,
"city":"ktm",
"prof":["coder"]

};
myfriend.name="peter parker";
myfriend["city"]="btm";
delete myfriend.prof;

console.log(myfriend);


// multiple objects 
var car={
    "car1":{
 "size":4,
 "name":"honda",
 "color":"red",
    "model":"2020",
    "gear box":["mannaul"]
},
     "car2":{
    "size":6,
    "name":"ford",
 "color":"black",
    "model":"1900",
    "gear box":["Automatic"]
     }
};

var carInfo=car.car1.name;
var carGear=car.car2["gear box"];
console.log(carGear);  
console.log(carInfo);

