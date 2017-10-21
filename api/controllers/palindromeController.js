exports.isAPalindrome = function(req, res) {
  console.log("entrou");
  var result = giveMeAWord("xa");
  var msg = '400 : isnt a palindrome ' + result;
  var err = {message: '400 : isnt a palindrome'};
    if (err)
      res.send(err);

    res.json({message: '200 ok'});

};

function giveMeAWord(word){
  var wordLength = word.length;
  var odd = wordLength % 2;


  return odd;
}
