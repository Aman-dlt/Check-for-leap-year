var inputaker = require('readline-sync');
var birthdate = inputaker.question("Enter your Year of Birth ");
  

function check() {
if (birthdate%400==0)
{
console.log("You were born in a leap year !!")
}
else
{
console.log("Alas " +birthdate+ " wasn't a leap year")
}
 
 }

 check();