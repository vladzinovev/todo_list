import { IDays, ITodo } from "@/components/types/types";
import { StoreContext } from "@/store/store";
import UiOpen from "@/ui/UiOpen/UiOpen";
import { toFormData } from "axios";
import { FC, SetStateAction, useContext, useEffect, useState } from "react";
import ItemTodo from "../../Today/ItemTodo/ItemTodo";
import { converterDate } from "../../../../utils/converterDate";
import styles from "./Days.module.scss";
import Item from "./item/Item";
const Days:FC<IDays> = ({todoDay,setTodoDay}) => {
  const { newTodo } = useContext(StoreContext);

  return (
    <>
      {todoDay.length
        ? todoDay.map((td, key) => (
            <>
              {key == 0 ? (
                <>
                  <Item key={key} td={td} todoDay={todoDay} setTodoDay={setTodoDay}/>
                </>
              ) : (
                <>
                  {td.date ===
                  todoDay[key - 1 > 0 ? key - 1 : 0].date ? null : (
                    <Item key={key} td={td} todoDay={todoDay} setTodoDay={setTodoDay}/>
                  )}
                </>
              )}
            </>
          ))
        : null}
    </>
  );
};
export default Days;
