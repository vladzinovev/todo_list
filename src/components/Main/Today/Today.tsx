import { ITodo } from "@/components/types/types";
import { StoreContext } from "@/store/store";
import UiSwitch from "@/ui/UiSwitch/UiSwitch";
import { SetStateAction, useContext, useEffect, useState } from "react";
import UiCheck from "../../../ui/UiCheck/UiCheck";
import ItemTodo from "./ItemTodo/ItemTodo";
import styles from "./Today.module.scss";
const Today = () => {
  const { checked, todayTodo, settingsOpen, setTodayTodo } =
    useContext(StoreContext);
  console.log(todayTodo.length);
  return (
    <div className={`${styles.today} ${settingsOpen && styles.no_click}`}>
      <div className={styles.heading}>
        <UiCheck />
        <p className={styles.title}>Today Tasks:</p>
      </div>
      {checked ? (
        todayTodo.length ? (
          <div className={styles.description}>
            {todayTodo.map((todo) => (
              <ItemTodo
                todo={todo}
                key={todo?.id}
                todoNow={todayTodo}
                setTodo={setTodayTodo}
              />
            ))}
          </div>
        ) : (
          <div className={styles.description}>
            <div className={styles.todo}>
              <p className={styles.no_todo}>There are no tasks today</p>
            </div>
          </div>
        )
      ) : null}
    </div>
  );
};
export default Today;
