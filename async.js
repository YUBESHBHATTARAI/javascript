async function harry(){
let btmwth= new Promise ((resolve,resize)=>{
setTimeout(()=>{
   resolve("deg 28")
},1000);
})

let bndgweth= new Promise ((resolve,resize)=>{
    setTimeout(()=>{
       resolve("deg 12")
    },2000);
    
})

let btmw=await btmwth;
let bndgw=await bndgweth;
return [ btmw,bndgw]
}
let a=harry()
a.then((data)=>{
    console.log(data)
})




