/*
 * Programming Quiz: Laugh (5-4)
 * Directions:
 * Write an anonymous function expression that stores a function in
 * a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.
 */

var laugh = function(n){
    var laughs = "";
    for(var i = 0; i < n; i++)
    {
        laughs += "ha";
    }
    laughs += "!";
    return laughs;
}

console.log(laugh(3));
