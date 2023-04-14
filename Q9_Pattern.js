 // Q.9] Print right angled triangle pattern of asterisk (*) without last (*) of line.

let i, j;
let rows=prompt("Enter a number to define the rows: ")
rows=parseInt(rows)


process.stdout.write("\n");
for (i = 1; i <= rows; ++i)   
{
  for (j = 1; j <= i; ++j)  
  {
    process.stdout.write("*");   
  }
   process.stdout.write("\n");
}
