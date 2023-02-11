import { ITodo } from "@/components/types/types";
import { StoreContext } from "@/store/store";
import UiOpen from "@/ui/UiOpen/UiOpen";
import { toFormData } from "axios";
import { useContext, useEffect, useState } from "react";
import ItemTodo from "../../Today/ItemTodo/ItemTodo";
import { converterDate } from "../../../../utils/converterDate";
import styles from "./Days.module.scss";
const Days = () => {
  const { newTodo, setNewTodo, settingsOpen } = useContext(StoreContext);
  const [newArray, setNewArray] = useState<ITodo[]>([]);
  useEffect(() => {
    const forSort = [...newTodo];
    setNewArray(
      forSort.sort((a: ITodo, b: ITodo): number => {
        if (a.date > b.date) return 1;
        if (a.date < b.date) return -1;
        return 0;
      })
    );
    console.log(newArray);
  }, [newTodo]);
  return (
    <>
      {newArray.length ?
        newArray.map((td) => (
          <>
            <div className={`${styles.day} ${settingsOpen && styles.no_click}`}>
              <div className={styles.description}>
                <div className={styles.color}></div>
                <div className={styles.main}>
                  <p className={styles.title}>{converterDate(td.date)+' Tasks'}</p>
                </div>
                <div className={styles.open}>
                  <UiOpen action={false} />
                </div>
              </div>
            </div>
          </>
        )):null}
    </>
  );
};
export default Days;
