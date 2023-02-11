import {ITodo } from "@/components/types/types";
import { Dispatch, SetStateAction } from "react";

export function calculateDate(date:string,setOldTodo:Dispatch<SetStateAction<ITodo[]>>,setTodayTodo:Dispatch<SetStateAction<ITodo[]>>,setNewTodo:Dispatch<SetStateAction<ITodo[]>>,data:ITodo|undefined) {
  const todayDate = new Date(Date.now());
  const month =
    todayDate.getUTCMonth() + 1 < 10
      ? "0" + (todayDate.getUTCMonth() + 1)
      : todayDate.getUTCMonth() + 1; 
  const day =
    todayDate.getDate() < 10
      ? "0" + todayDate.getUTCDate()
      : todayDate.getDate();
  const year = todayDate.getFullYear();
  const newdate = year + "-" + month + "-" + day;
  if (data) {
    if (date < newdate) {
      console.log('мьеньше')
      return setOldTodo((prev)=>[...prev,data]);
    }
    if (date == newdate) {
      console.log('равно')
      return setTodayTodo((prev)=>[...prev,data]);
    }
    if (date > newdate) {
      console.log('больше')
      return setNewTodo((prev)=>[...prev,data]);
    }
  }
  
}
