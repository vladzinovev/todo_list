import { Dispatch, SetStateAction } from "react";

import { ITodo } from "@/types/types";
import { replaceDate } from "./replaceDate";

export function calculateDate(
  date: string,
  setOldTodo: Dispatch<SetStateAction<ITodo[]>>,
  setTodayTodo: Dispatch<SetStateAction<ITodo[]>>,
  setNewTodo: Dispatch<SetStateAction<ITodo[]>>,
  data?: ITodo
) {
  const newdate = replaceDate(new Date(Date.now()));
  if (data) {
    if (date < newdate) {
      return setOldTodo((prev) => [...prev, data]);
    }
    if (date == newdate) {
      return setTodayTodo((prev) => [...prev, data]);
    }
    if (date > newdate) {
      return setNewTodo((prev) => [...prev, data]);
    }
  }
}
