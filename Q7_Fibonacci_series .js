/* Q.7] Print Fibonacci series up to given number.*/

let n, i, first = 0, second = 1, next = 0;
n = prompt("Enter a no for Fibonacci Series:");
n = Number.parseInt(n);
for (i = 1; i <= n; i++) {
  console.log("\t%d", next);
  next = first + second;
  first = second;
  second = next;
}