Array.prototype.sort = function() {

    const max = Math.max(...this);
    const countArray = new Array(max + 1).fill(0);
  
    for (let num of this) {
      countArray[num]++;
    }
  
    const sortedArray = [];
    for (let i = 0; i < countArray.length; i++) {
      while (countArray[i]-- > 0) {
        sortedArray.push(i);
      }
    }
  
    return sortedArray;
  };