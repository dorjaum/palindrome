exports.isAPalindrome = function(req, res) {
  var word = req.body.word;

  var isPalindrome = palindromeAnalisis(word);
  if(isPalindrome){
    var msgStatus200 = {message: '200 : is a palindrome = '+ word};
    res.status(200).send(msgStatus200);
  }else{
    var msgStatus400 = {message: '400 : isnt a palindrome = ' + word};
    res.status(400).send(msgStatus400);
  }

};

function palindromeAnalisis(word){
  var wordLength = word.length;
  var odd = wordLength % 2;

  if(odd > 0){
    verifyOddWord(word, wordLength);
  }else {
    verifyPairWord(word, wordLength);
  }

  return true;
}

function verifyPairWord(word, length){
  var halfLength = wordLength /2;
  var firstHalf = word.substring(0, halfLength);
  var secondHalf = word.substring(halfLength+1, wordLength);

  //while(){

  //}
}

function verifyOddWord(word, length){
  
}
