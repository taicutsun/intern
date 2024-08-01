function shortenToDate(dateTimeString) {
    return dateTimeString.replace(/, .*/, '');
  }