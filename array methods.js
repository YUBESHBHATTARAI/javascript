//Array methods 
let num=[1,2,3,34,4]
let b=num.toString()//b is now a string
console.log(b)

let c=num.join(" and ")
console.log(c)
console.log(typeof c)

let r=num.pop()
console.log(num,r)//pop returns the poped element

let a=num.push(9)
console.log(num,a)//push returns the new array length

let y=num.shift()
console.log(num,y)//removes an element from the start of an array

let z=num.unshift(90)
console.log(num,z)//returns new array length

let lux=[1,2,3,34,4]
delete lux[0]
console.log(lux[0])//deletes the element at the given index
console.log(lux)//1st item is deleted but length will be same
let n1=[1,2,3,34,4]
let n2=[1,12,13,34,14]
let n3=n1.concat(n1,n2)//concating two arrays 
console.log(n3)
n2.sort()//sorting helps to sort the number but this will sort the number in alphabetical way
console.log(n2)
n2.reverse()//basically it is reverse of sorted number
console.log(n2)
n2.splice(2,1,24,23,44)//1st number is for starting point 2nd is for deleting in org.array 
console.log(n2)
let n4=n2.slice(1,6)
console.log(n4)