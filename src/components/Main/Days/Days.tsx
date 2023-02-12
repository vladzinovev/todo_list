import { FC } from "react";

import { IDays } from "@/types/types";
import Item from "./item/Item";

const Days: FC<IDays> = ({ todoDay, setTodoDay }) => {
  return (
    <>
      {todoDay.length
        ? todoDay.map((td, key) => (
            <>
              {key === 0 ? (
                <>
                  <Item
                    key={key}
                    td={td}
                    todoDay={todoDay}
                    setTodoDay={setTodoDay}
                  />
                </>
              ) : (
                <>
                  {td.date ===
                  todoDay[key - 1 > 0 ? key - 1 : 0].date ? null : (
                    <Item
                      key={key}
                      td={td}
                      todoDay={todoDay}
                      setTodoDay={setTodoDay}
                    />
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
