let text ="name:SuTzuAn age:19 height:162 job:student phonenumber:0987878787 email:tzaun911020@gmail.com";

let re1=/[a-z]+/g;
let re2=/[0-9]+/g;
let re3=/([a-z0-9A-Z]+)/g;
let re4=/([a-z0-9A-Z]+)/;
let re5=/:([a-z0-9A-Z]+)/g;
let re6 = /:\d+/g; 
let re7 = /:\D+/g; 


console.log(text.match(re1));
console.log(text.match(re2));
console.log(text.match(re3));
console.log(text.match(re4));
console.log(text.match(re5));
console.log(text.match(re6));
console.log(text.match(re7));
