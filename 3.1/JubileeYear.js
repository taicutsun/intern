function isJubilee(year) {
    const date = new Date(year, 6, 25); 
    return date.getDay() === 0;
  }