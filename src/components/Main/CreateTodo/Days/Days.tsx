import { StoreContext } from "@/store/store";
import { useContext, useState } from "react";
import styles from "./Days.module.scss";
const Today = () => {
  const { checked, todayTodo, settingsOpen, setTodayTodo } =
    useContext(StoreContext);
  console.log(todayTodo.length);
  return (
    <div className={`${styles.day} ${settingsOpen && styles.no_click}`}>
      {todayTodo.length ? (
        <div className={styles.description}>
          {todayTodo.map((todo) => (
            <ItemTodo todo={todo} key={todo?.id} setTodayTodo={setTodayTodo} />
          ))}
        </div>
      ) : (
        null
      )}
    </div>
  );
};
export default Today;
