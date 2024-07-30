function findFile(filesystem) {
    for (let key in filesystem) {
      if (typeof filesystem[key] === 'object') {
        let result = findFile(filesystem[key]);
        if (result) return key + '/' + result;
      } 
      else return key;
    }
    return null;
  }
  
  function search(filesystem) {
    let result = findFile(filesystem);
    if (result) return result;
    else throw new Error('No files!');

  }