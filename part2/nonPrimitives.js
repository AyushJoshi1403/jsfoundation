const username = {
  firstname: "ayush",
  isLoggedIn: true,
  "email id": "abc@gmail.com",
};

username.firstname = "Mr.A";
username.lastname = "Joshi";

console.log(username.firstname);
console.log(username["lastname"]);              // alternate way to access property with bracket notation without dot
console.log(username["email id"]);              // accessing property when their is a space in name(we can't use dot notation here)
console.log(username);
console.log(typeof username);

let today = new Date();
// console.log(today.getDate());


// Array

let anotherUser = ["ayush", true];

console.log(anotherUser[0]);

let isValue = "2abc";
console.log(Number(isValue));
console.log(typeof Number(isValue));

console.log(Number(null));
console.log(Number(undefined));
