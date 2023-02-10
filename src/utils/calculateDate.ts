import {ITodo } from "@/components/types/types";
import { Dispatch, SetStateAction } from "react";

export function calculateDate(date:string,setOldTodo:Dispatch<SetStateAction<ITodo[]>>,setTodayTodo:Dispatch<SetStateAction<ITodo[]>>,setNewTodo:Dispatch<SetStateAction<ITodo[]>>,data:ITodo|undefined) {
  const todayDate = new Date(Date.now());
  const month =
    todayDate.getUTCMonth() + 1 < 10
      ? "0" + (todayDate.getUTCMonth() + 1)
      : todayDate.getUTCMonth() + 1; //months from 1-12
  const day =
    todayDate.getUTCDate() < 10
      ? "0" + todayDate.getUTCDate()
      : todayDate.getUTCDate();
  const year = todayDate.getUTCFullYear();
  const newdate = year + "-" + month + "-" + day;
  if (data) {
    if (date < newdate) {
      return setOldTodo((prev)=>[...prev,data]);
    }
    if (date == newdate) {
      return setTodayTodo((prev)=>[...prev,data]);
    }
    if (date > newdate) {
      return setNewTodo((prev)=>[...prev,data]);
    }
  }
  
}
