let arr = [64, "nature", null, 845, "open source", true]

console.log(arr.length) //prints the length of the array 

arr.pop() //last element will be removed
console.log(arr)

arr.push(54) // 54 will be added to the array (last) 
console.log(arr)

arr.shift() //first element will be removed
console.log(arr)

arr.unshift("JS") //JS will be added to the array (first) 
console.log(arr)

const newl = arr.unshift("John")
console.log(newl) // prints lenth of the array

console.log(arr.toString()) //converts array to string

console.log(arr.sort())





