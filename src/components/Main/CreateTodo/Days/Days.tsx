import { ITodo } from "@/components/types/types";
import { StoreContext } from "@/store/store";
import UiOpen from "@/ui/UiOpen/UiOpen";
import { toFormData } from "axios";
import { SetStateAction, useContext, useEffect, useState } from "react";
import ItemTodo from "../../Today/ItemTodo/ItemTodo";
import { converterDate } from "../../../../utils/converterDate";
import styles from "./Days.module.scss";
import Item from "./item/Item";
const Days = () => {
  const { newTodo } = useContext(StoreContext);

  return (
    <>
      {newTodo.length
        ? newTodo.map((td, key) => (
            <>
              {key == 0 ? (
                <>
                  <Item key={key} td={td} />
                </>
              ) : (
                <>
                  {td.date ===
                  newTodo[key - 1 > 0 ? key - 1 : 0].date ? null : (
                    <Item key={key} td={td} />
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
