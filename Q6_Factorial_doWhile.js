// Q.6] Print Factorial of given number using do-While loop.
  
  let i = 1, fact = 1;

number = prompt("Enter a number : ")
number = Number.parseInt(number)
do {
  fact = fact * i;
  i++;
} while (i <= number)
console.log("Factorial of " + number + " is: " + fact);