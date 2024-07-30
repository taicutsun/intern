function yearDays(year)
{
  let days;
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) days = 366;
  else  days = 365;
  
  return `${year} has ${days} days`;

}