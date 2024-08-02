function uniqStrings(size, validPct, [a, b]) {
    const rnd = (a, b) => (b - a + 1) * Math.random() + a | 0;3
    const choose = xs => xs[rnd(0, xs.length - 1)];
    const sample = (xs, n) => Array.from({length: n}, () => choose(xs));
    const valid = size * validPct | 0;
    return Array.from({length: size}, (_, i) => sample('abcdefghijklmnopqrstuvwxyz', b - 1).join('') + (i >= valid ? '$' : ''));
  }