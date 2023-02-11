
import { INoTodo } from "@/components/types/types";
import { FC } from "react";
import styles from "./NoTodo.module.scss";
const NoTodo:FC<INoTodo>=({text})=>{
    return(
        <div className={styles.description}>
            <div className={styles.todo}>
              <p className={styles.no_todo}>{text}</p>
            </div>
          </div>
    )
}
export default NoTodo;