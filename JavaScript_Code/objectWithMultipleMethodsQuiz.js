/*
 * Programming Quiz: Facebook Friends (7-5)
 * Directions:
 * Create an object called facebookProfile. The object should have 3 properties:

 * your name
 * the number of friends you have, and
 * an array of messages you've posted (as strings)
 * The object should also have 4 methods:

 * 1. postMessage(message) - adds a new message string to the array
 * 2. deleteMessage(index) - removes the message corresponding to the index provided
 * 3. addFriend() - increases the friend count by 1
 * 4. removeFriend() - decreases the friend count by 1
 */


var facebookProfile = 
{
    name: "Isaiah Binford",
    friends: 200,
    messages: ["Hello", "Let's go to dinner", "Bye!"],
    postMessage: function(message)
    {
        return facebookProfile.messages.push(message);
    },
    deleteMessage : function(index) 
    {
        var removedMessage = facebookProfile.messages.splice(index,1);
        return removedMessage;
    },
    addFriend: function()
    {
        return this.friends += 1;
    },
    removeFriend: function()
    {
        return this.friends -= 1;
    }
};
