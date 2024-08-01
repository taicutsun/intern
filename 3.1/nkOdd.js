function findOddDigits(n, k) {
    if (k === 0) return 0;
  
    const digits = n.toString().split('').map(Number);
    const oddDigits = digits.filter(digit => digit % 2 !== 0);
  
    if (k > oddDigits.length) return 0;
  
    const result = oddDigits.slice(0, k).join('');
    return parseInt(result, 10);
  }