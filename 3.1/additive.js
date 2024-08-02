function findAdditiveNumbers(num) {
    for (let i = 1; i <= num.length / 2; i++) {
      for (let j = i + 1; j <= num.length - i; j++) {
        let first = num.slice(0, i);
        let second = num.slice(i, j);
        if (first.length > 1 && first.startsWith('0')) continue;
        if (second.length > 1 && second.startsWith('0')) continue;
        let rest = num.slice(j);
        let sequence = [first, second];
        let a = parseInt(first);
        let b = parseInt(second);
        while (rest.length > 0) {
          let next = (a + b).toString();
          if (next.length > 1 && next.startsWith('0')) break;
          if (!rest.startsWith(next)) break;
          sequence.push(next);
          a = b;
          b = parseInt(next);
          rest = rest.slice(next.length);
        }
        if (rest.length === 0) return sequence;
      }
    }
    return [];
  }