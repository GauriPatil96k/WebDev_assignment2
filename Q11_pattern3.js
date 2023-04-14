// Q.11] Pattern no 3

let i, j;
let rows = prompt("Enter a number to define the rows: ")
rows = parseInt(rows)


 process.stdout.write("\n");
for (i = rows; i >0 ; --i) 
{
  for (j = i; j >0 ; --j) 
  {
     process.stdout.write("*");  
  }
   process.stdout.write("\n");
}
