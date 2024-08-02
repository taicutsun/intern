function canFormWord(word, lettersCount) {
    let wordCount = {};
    
    for (let letter of word) {
      if (!wordCount[letter]) wordCount[letter] = 0;
      wordCount[letter]++;
    }
    
    for (let letter in wordCount) {
      if (!lettersCount[letter] || wordCount[letter] > lettersCount[letter]) {
        return false;
      }
    }
    return true;
  }

function longestWord(letters) {
  
  let lettersCount = {};
  for (let letter of letters) {
    if (!lettersCount[letter]) lettersCount[letter] = 0;
    lettersCount[letter]++;
  }
  
  let longestWords = [];
  let maxLength = 0;
  
  for (let word of words) {
    if (canFormWord(word, lettersCount)) {
      if (word.length > maxLength) {
        longestWords = [word];
        maxLength = word.length;
      } else if (word.length === maxLength) {
        longestWords.push(word);
      }
    }
  }
  
  longestWords.sort();
  
  return longestWords.length > 0 ? longestWords : null;
}
