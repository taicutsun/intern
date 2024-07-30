function largest(n, arr) {
    return arr.sort((a, b) => b - a).slice(0, n).sort((a, b) => a - b);
}
