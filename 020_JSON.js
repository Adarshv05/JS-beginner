// JSON - JavaScript Object Notation

obj = {name: "John", length: 1, a:{Yooo : "Boiss"} }
// only " " on JSON,  ' ' not supported 

jso = JSON.stringify(obj);
console.log(typeof jso)
console.log(jso)

parsed = JSON.parse(`{"name":"John","length":1,"a":{"Yooo":"Boiss"}}`)
console.log(parsed);