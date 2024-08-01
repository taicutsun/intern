function differenceInAges(ages){
    const youngest = Math.min(...ages);
    const oldest = Math.max(...ages);
    const ageDifference = oldest - youngest;
    return [youngest, oldest, ageDifference];
  }