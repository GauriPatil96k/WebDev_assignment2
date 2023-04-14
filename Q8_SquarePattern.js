// Q.8] Print Square asterisk (*) pattern

let rows = prompt("Enter a number to define the rows:")
rows = Number.parseInt(rows)

let i,j
for(i=1; i<rows; i++)
  {
     process.stdout.write("*")
    for(j=1; j<rows;j++){
  
   process.stdout.write("*")
  
    }
     process.stdout.write("\n")
  }
