const user = { id:1, Name:'Korim', job:'devlpr'}
const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);
const jsonParse = JSON.parse(stringified);
console.log(jsonParse)
