/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length 'n'.
// This function runs in O(N^2) time.

function makeLine(length) 
{
    var line = "";
    for (var j = 1; j <= length; j++) 
    {
        line += "* ";
    }
    return line + "\n";
}


function buildTriangle(n)
{
    var triangle = "";
    
    for(var i = 1; i <= n; i++)
    {
       triangle += (makeLine(i));    
    }
    return triangle;
}


console.log(buildTriangle(10));
