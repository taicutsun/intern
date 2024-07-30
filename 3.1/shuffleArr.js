function shuffle(arr) {
    let currI = arr.length;
  
    while (currI != 0) {
  
      let randI = Math.floor(Math.random() * currI);
      currI--;
  
      [arr[currI], arr[randI]] = [arr[randI], arr[currI]];
  }
  return arr;
  }

const input = [1, 2, 3, 4];
const shuffled = shuffle(input);
console.log(shuffled); // [3, 1, 4, 2] (or some other shuffled version)
