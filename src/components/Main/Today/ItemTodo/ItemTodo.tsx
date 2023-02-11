import { IItemTodo } from "@/components/types/types";
import UiSwitch from "@/ui/UiSwitch/UiSwitch";
import { FC } from "react";
import styles from "./ItemTodo.module.scss";
const ItemTodo:FC<IItemTodo> = ({todo,key,todoNow,setTodo}) => {
    return (
        <div className={styles.item} key={key}>
        <div
          className={`${styles.color} ${
            todo?.selected == "important"
              ? styles.important
              : todo?.selected == "middle"
              ? styles.middle
              : styles.lite
          } `}
        ></div>
        <div className={styles.main}>
          <p className={`${styles.title} ${todo?.switched?styles.decoration:null}`}>{todo?.title}</p>
          <p className={styles.descr}>{todo?.descr.length<26?todo?.descr :todo?.descr.substr(0,26)+'...'}</p>
        </div>
        <div className={styles.switch}>
         <UiSwitch active={todo.switched} setBoolean={undefined} todoNow={todoNow} setTodo={setTodo} keyId={todo.id} />
        </div>
      </div>
    );
  };
  export default ItemTodo;