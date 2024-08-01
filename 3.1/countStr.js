    let count = 0;  
    function countStrings(item) {
      if (typeof item === 'string') {
        count++;
      } else if (Array.isArray(item)) {
        item.forEach(element => countStrings(element));
      } else if (item && typeof item === 'object') {
        Object.values(item).forEach(value => countStrings(value));
      }
      return count;
    }
  
    countStrings({ first: "1",
        second: "2",
        third: false,
        fourth: ["anytime", 2, 3, 4],
        fifth: null
      });  

  console.log(count); // returns 3