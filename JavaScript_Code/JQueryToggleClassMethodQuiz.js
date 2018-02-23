/*
For this quiz, use a jQuery class selector and featuredArticle variable to toggle the 'featured' class!
*/

// 'featuredArticle' will be the variable that we set a JQuery selector to.
var featuredArticle;

// Set 'featuredArticle' equal to the JQuery selection for both classes in the class declaration for 'featured'.
featuredArticle = $('.article-item.featured');

// Toggle it so that the 'featured' class is no longer present, and only the 'article-item' class is.
featuredArticle.toggleClass('article-item');
