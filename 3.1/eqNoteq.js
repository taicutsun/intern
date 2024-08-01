function areEqual(s1, s2) {
    if (s1.size!== s2.size) {
      return false;
    }
    for (let item of s1) {
      if (!s2.has(item)) {
        return false;
      }
    }
    for (let item of s2) {
      if (!s1.has(item)) {
        return false;
      }
    }
    return true;
  }
  
  function notEqual(s1, s2) {
    return!areEqual(s1, s2);
  }