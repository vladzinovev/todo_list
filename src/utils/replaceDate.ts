export function replaceDate(todayDate: Date) {
    const month =
    todayDate.getUTCMonth() + 1 < 10
      ? "0" + (todayDate.getUTCMonth() + 1)
      : todayDate.getUTCMonth() + 1; 
  const day =
    todayDate.getDate() < 10
      ? "0" + todayDate.getUTCDate()
      : todayDate.getDate();
  const year = todayDate.getFullYear();
  return year + "-" + month + "-" + day;
}