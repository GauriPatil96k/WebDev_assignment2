// Q.2] Calculate sum of n numbers.

let n = prompt("Enter the number of value:")
n = Number.parseInt(n)
let sum = 0
for (i = 1; i <= n; i++) {
  num=prompt("Enter the number :   ")
  num=Number.parseInt(num)
  sum = sum + num;
}
console.log(sum)
