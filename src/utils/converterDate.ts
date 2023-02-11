import { replaceDate } from "./replaceDate";
export function converterDate(times: string) {
  const newdate = replaceDate(new Date(Date.now()));
  if (times == newdate) {
    return "Tomorrow";
  } else {
    return times.substr(5, 5).replace("-", "/");
  }
}
