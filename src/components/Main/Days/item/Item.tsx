import { FC, useContext, useState } from "react";

import ItemTodo from "@/components/Main/Today/ItemTodo/ItemTodo";

import { StoreContext } from "@/store/store";
import { converterDate } from "@/utils/converterDate";
import styles from "./Item.module.scss";
import UiOpen from "@/ui/UIOpen/UIOpen";
import { IItem } from "@/types/types";

const Item: FC<IItem> = ({ key, td, todoDay, setTodoDay }) => {
  const { settingsOpen } = useContext(StoreContext);
  return (
    <div
      key={key}
      className={`${styles.day} ${settingsOpen && styles.no_click}`}
    >
      <div className={styles.description}>
        <div className={styles.flex}>
          <div className={styles.color}></div>
          <div className={styles.main}>
            <p className={styles.title}>{converterDate(td.date) + " Tasks"}</p>
          </div>
          <div className={styles.open}>
            <UiOpen td={td} todoDay={todoDay} setTodoDay={setTodoDay} />
          </div>
        </div>
        {td?.open &&
          todoDay.map((nt) => (
            <>
              {nt.date == td.date ? (
                <ItemTodo
                  todo={nt}
                  key={nt.id}
                  todoNow={todoDay}
                  setTodo={setTodoDay}
                />
              ) : null}
            </>
          ))}
      </div>
    </div>
  );
};

export default Item;
