import { ITodo } from "@/components/types/types";
import { StoreContext } from "@/store/store";
import UiSwitch from "@/ui/UiSwitch/UiSwitch";
import { SetStateAction, useContext, useEffect, useState } from "react";
import UiCheck from "../../../ui/UiCheck/UiCheck";
import ItemTodo from "./ItemTodo/ItemTodo";
import NoTodo from "./NoTodo/NoTodo";
import styles from "./Today.module.scss";
const Today = () => {
  const { checked, todayTodo, settingsOpen, setTodayTodo } =
    useContext(StoreContext);

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
          <NoTodo text="There are no tasks today" />
        )
      ) : null}
    </div>
  );
};
export default Today;
