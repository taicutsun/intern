function changeTime(time, delta) {
    const [hours, minutes] = time.split(':').map(Number);
    let totalMinutes = hours * 60 + minutes;
    totalMinutes += delta;
    totalMinutes = (totalMinutes + 1440) % 1440;
    const newHours = Math.floor(totalMinutes / 60);
    const newMinutes = totalMinutes % 60;
    return `${pad(newHours)}:${pad(newMinutes)}`;
  }
  
  function pad(number) {
    return (number < 10 ? '0' : '') + number;
  }