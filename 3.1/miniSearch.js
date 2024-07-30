function searchEng(str, searchWord, method, newWord) {
    if (method !== 1 && method !== 2) return 'No valid input';
    if (!/^[a-zA-Z0-9]+$/.test(searchWord)) return 'No valid input';
    if (method === 2 && !/^[a-zA-Z0-9]+$/.test(newWord)) return 'No valid input';
  
    let matches;
    let newString;
  
    if (method === 1) {
      let m = str.match(new RegExp('\\b' + searchWord + '\\b', 'g'));
      matches = m ? m.length : 0;
      newString = '';
    } else if (method === 2) {
      let m = str.match(new RegExp('\\b' + searchWord + '\\b', 'g'));
      matches = m ? m.length : 0;
      newString = str.replace(new RegExp('\\b' + searchWord + '\\b', 'g'), newWord);
    }
  
    return { matches, newString };
  }