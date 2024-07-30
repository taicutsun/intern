function calcDiff(arr) {
    arr.sort((a, b) => a - b);
     
    let res = [];
    let el = new Set(arr);
  
    for (let n of el) if (el.has(n + 2)) res.push([n, n + 2]);
  
    return res;
  }
 