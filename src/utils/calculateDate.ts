import { ITodo } from "@/components/types/types";
import { Dispatch, SetStateAction } from "react";
import { replaceDate } from "./replaceDate";

export function calculateDate(
  date: string,
  setOldTodo: Dispatch<SetStateAction<ITodo[]>>,
  setTodayTodo: Dispatch<SetStateAction<ITodo[]>>,
  setNewTodo: Dispatch<SetStateAction<ITodo[]>>,
  data: ITodo | undefined
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
