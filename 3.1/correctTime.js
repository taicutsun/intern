function timeCorrect(timeString) {
    if (!timeString) return timeString;
    
  
    const timeFormat = /^(\d{2}):(\d{2}):(\d{2})$/;
    const match = timeString.match(timeFormat);

    if (!match) return null;
  
    let [hours, minutes, seconds] = match.slice(1).map(Number);
  
    if (seconds >= 60) {
      minutes += Math.floor(seconds / 60);
      seconds = seconds % 60;
    }
  
    if (minutes >= 60) {
      hours += Math.floor(minutes / 60);
      minutes = minutes % 60;
    }
  
    if (hours >= 24) hours = hours % 24;
    
  
    const correctedTime = [
      hours.toString().padStart(2, '0'),
      minutes.toString().padStart(2, '0'),
      seconds.toString().padStart(2, '0')
    ].join(':');
  
    return correctedTime;
  }
  