function speedListen(audioLength, playSpeed) {
    const [hours, minutes, seconds] = audioLength.split(':').map(Number);
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    const adjustedSeconds = Math.floor(totalSeconds / playSpeed);
    const hoursAdjusted = Math.floor(adjustedSeconds / 3600);
    const minutesAdjusted = Math.floor((adjustedSeconds % 3600) / 60);
    const secondsAdjusted = adjustedSeconds % 60;
    return `${pad(hoursAdjusted)}:${pad(minutesAdjusted)}:${pad(secondsAdjusted)}`;
  }
  
  function pad(number) {
    return (number < 10? '0' : '') + number;
  }