/*
 * Programming Quiz: Inline Functions 
 * Directions:
 * Call the emotions() function so that it prints the output you see below, but instead of passing
 * the laugh() function as an argument, pass an inline function expression instead.
 */


function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy", function laugh(n)
{
    var laughs = "";
    for(var i = 0; i < n; i++)
    {
        laughs += "ha";
    }
    laughs += "!";
    return laughs;
});
