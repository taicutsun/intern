function part(word) {

    if (nouns.includes(word)) return "common";
    
    
    if (adjectives.includes(word)) return "adjective";
    
    
    for (let i = 1; i < word.length; i++) {
      const prefix = word.slice(0, i);
      const suffix = word.slice(i);
      
      if (nouns.includes(prefix) && nouns.includes(suffix)) return "compound";
      
      
      if (adjectives.includes(prefix) && nouns.includes(suffix)) return "compound";
      
    }
    
    return "neither";
  }
  