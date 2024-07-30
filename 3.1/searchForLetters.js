function change(str) {
    let result = '';
     
    for (let i = 0; i < 26; i++) {
      let charCode = 65 + i; 
      let lowerCharCode = 97 + i; 
      
      if (str.toUpperCase().indexOf(String.fromCharCode(charCode)) !== -1) result += '1';
      else result += '0';
    }
    return result;
  }
  