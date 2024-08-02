let dataTypes = str => str
  .replace(/\d+/g, ' _number_ ')
  .replace(/true|false/gi, ' _boolean_ ')
  .replace(/\b[a-z]+\b/gi, ' _string_ ')
  .match(/[a-z]+/gi)