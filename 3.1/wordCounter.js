const wordCounter = text => {
    const words = (text.match(/\b[a-z']+\b/gi)||[]).reduce((stats,w)=>({...stats,[w]:(stats[w]||0)+1}),{'constructor': 0});
    return {count: word => words[word]||0};
  };