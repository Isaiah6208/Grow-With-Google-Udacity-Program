/*
 * Programming Quiz: The Price is Right (6-3)
 * Directions:
 * Starting with this array of prices, change the prices of the
 * 1st, 3rd, and 7th elements in the array.
*/

var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
 

var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
prices[0] = 2.1;
prices[2] = 2.13;
prices[6] = 9.12;


for(var i = 0; i < prices.length; i++)
{
    console.log(prices[i]);
}
