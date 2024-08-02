function maxConsecutiveSequenceLength(array) {
const f = a => a.length === 0 ? 0 :
Math.max(1 + g(a.slice(1), a[0]), f(a.slice(1)));
const g = (a, x) => a.length === 0 ? 0 :
     a[0] === x ? 1 + g(a.slice(1), x) :
     Math.max(g(a.slice(1), x), a[0] === x + 1 ? 1 + g(a.slice(1), a[0]) : 0);
return f(array);
}