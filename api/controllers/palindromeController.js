exports.isAPalindrome = function(req, res) {
  var word = req.body.word;
  var isPalindrome = palindromeAnalisis(word);

  if(isPalindrome){
    var msgStatus200 = {message: 'Is a palindrome = '+ word};
    res.status(200).send(msgStatus200);
  }else{
    var msgStatus400 = {message: 'Isnt a palindrome = ' + word};
    res.status(400).send(msgStatus400);
  }

};

function palindromeAnalisis(word){
  var wordLength = word.length;
  var odd = wordLength % 2;

  if(odd > 0){
    verifyOddWord(word);
  }else {
    return verifyPairWord(word);
  }

  return true;
}

function verifyPairWord(word){
  var wordLength = word.length;
  var halfLength = wordLength / 2;
  var firstHalf = word.substring(0, halfLength);
  var secondHalf = word.substring(halfLength, wordLength);
  var listFirstHalf = firstHalf.split("");
  var listSecondHalf = secondHalf.split("");
  var lastPosition = secondHalf.length;
  var isPalindrome = true;

  listFirstHalf.forEach(function(letter){
    lastPosition = lastPosition - 1;
    if(letter != listSecondHalf[lastPosition]){
      isPalindrome = false;
    }
  });

  return isPalindrome;
}

function verifyOddWord(word, length){

}
