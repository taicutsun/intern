const isReallyNaN = (val) => {
    return typeof val === 'number' && isNaN(val);
  };