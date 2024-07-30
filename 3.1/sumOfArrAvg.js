function sumAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      let innerSum = 0;
      for (let j = 0; j < arr[i].length; j++) {
        innerSum += arr[i][j];
      }
      sum += innerSum / arr[i].length;
    }
    return Math.floor(sum);
  }

  console.log(sumAverage([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]])); 