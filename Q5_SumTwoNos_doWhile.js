/* Q.5] Add two numbers till user tells. */

let num, a, b, i=1;
num = prompt("Enter how many times you want to perform addition:");
num = Number.parseInt(num);
do
{
  a = prompt("\nEnter First no:");
  a = Number.parseInt(a);
  b = prompt("Enter Second no:");
  b = Number.parseInt(b);
  console.log("Sum of %d+%d = %d", a, b, a+b);
  i++;
}while(i<=num);