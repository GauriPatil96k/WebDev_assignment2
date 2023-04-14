// Q.4] Print Factorial of given number using For or While loop.

let i, fact = 1;

number = prompt("Enter a number : ")
number = Number.parseInt(number)
for (i = 1; i <= number; i++) {
  fact = fact * i;
}
console.log("Factorial of " + number + " is: " + fact);  