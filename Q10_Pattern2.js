/* Q.10] Print mirrored pattern of right angled triangle. */

let i, j, rows, k;  
    rows=prompt(" Enter a number to define the rows: \n ");
rows=Number.parseInt(rows)
    

     process.stdout.write("\n");  
    for (i = 1; i <= rows; i++)   
    {  
        for (j = i; j < rows; j++)  
        {  
             process.stdout.write(" ");   
        }  
        for (k = 1; k <= i; k++)  
        {  
             process.stdout.write("*"); // print the Star  
        }  
         process.stdout.write("\n");   
    }  
       
 