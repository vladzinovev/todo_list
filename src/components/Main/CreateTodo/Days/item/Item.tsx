import ItemTodo from "@/components/Main/Today/ItemTodo/ItemTodo";
import { IItem } from "@/components/types/types";
import { StoreContext } from "@/store/store";
import UiOpen from "@/ui/UiOpen/UiOpen";
import { converterDate } from "@/utils/converterDate";
import { FC, useContext } from "react";
import styles from "./Item.module.scss";

const Item:FC<IItem> = ({key,td}) => {
    const { newTodo, setNewTodo, settingsOpen } = useContext(StoreContext);
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
            <UiOpen action={false} />
          </div>
        </div>
        {newTodo.map((nt) => (
          <>
            {nt.date == td.date ? (
              <ItemTodo
                todo={nt}
                key={nt.id}
                todoNow={newTodo}
                setTodo={setNewTodo}
              />
            ) : null}
          </>
        ))}
      </div>
    </div>
  );
};
export default Item;
