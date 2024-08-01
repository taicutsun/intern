function logicalCalc(booleans, operator) {
    let result = booleans[0];
    for (let i = 1; i < booleans.length; i++) {
      if (operator === "AND") {
        result = result && booleans[i];
      } else if (operator === "OR") {
        result = result || booleans[i];
      } else if (operator === "XOR") {
        result = result !== booleans[i];
      }
    }
    return result;
  }