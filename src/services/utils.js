export const getCurrentDateDigit = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  const today = `${year}${month}${day}`;
  return today
}

export const getCurrentDate = (date) => {
  let result = { 'month_day' : "", 'time' : "" }
  let month_day = getCurrentMonthDay(date);
  let time = getCurrentTime(date);
  result.month_day = month_day;
  result.time = time;
  return result;
}

const getCurrentMonthDay = (date) => {
  let month_day = new Intl.DateTimeFormat('en-US',
  {
    dateStyle: 'long',
  }).format(date)
  return month_day;
}

export const getCurrentTime = (date) => {
  let time = new Intl.DateTimeFormat('en-US',
  {
    timeStyle: 'short'
  }).format(date)
  return time;
}
