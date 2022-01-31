let str = "Yoo bois this is just a line of code ok bois";

console.log(str.length) //length of string

console.log(str.indexOf("bois")) //returns first occurance
console.log(str.lastIndexOf("bois")) //returns last occurance

console.log(str.slice(4,8)) // 4 included 8 excluded (x,y-1)

ns = str.replace("bois", "gyuz") //only first occurance will be replaced
console.log(ns)
