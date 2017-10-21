'use strict';
module.exports = function(app) {
  var palindrome = require('../controllers/palindromeController');

  // todoList Routes
  app.route('/palindrome')
    .post(palindrome.isAPalindrome);
};
