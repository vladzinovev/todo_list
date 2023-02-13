import { FormEvent, useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

import { useInput } from "@/hooks/useInput";
import { StoreContext } from "@/store/store";
import { ITodo } from "@/types/types";
import { calculateDate } from "@/utils/calculateDate";
import TextField from "./Input/Input";
import { BoxCreate, CardBoxColor, FormBtn } from "./CreateTodoStyle";
import styles from "./CreateTodo.module.scss";

const CreateTodo = () => {
  const { setTodayTodo, setOldTodo, setNewTodo, id, setId } =
    useContext(StoreContext);

  const date = useInput("", { isEmpty: true });
  const title = useInput("", { isEmpty: true, minLength: 2, maxLength: 18 });
  const descr = useInput("", { isEmpty: true, minLength: 2, maxLength: 50 });

  const [selected, setSelceted] = useState("important");
  const [data, setData] = useState<ITodo>();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setData({
      id: id,
      open: false,
      date: date?.value,
      title: title.value,
      descr: descr.value,
      selected: selected,
      switched: false,
    });
    const resetForm = e.target as HTMLFormElement;
    resetForm.reset();
    setSelceted("important");
  }

  useEffect(() => {
    setId((prev) => prev + 1);
    calculateDate(date.value, setOldTodo, setTodayTodo, setNewTodo, data);
  }, [data]);

  return (
    <Box sx={BoxCreate}>
      <form
        className={styles.form}
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
      >
        <Box
          sx={CardBoxColor}
          className={`${
            selected == "important"
              ? styles.important
              : selected == "middle"
              ? styles.middle
              : styles.lite
          } `}
        ></Box>
        <TextField idLabel="date" title={date} type="date" />
        <TextField idLabel="title" title={title} type="text" />
        <TextField idLabel="descr" title={descr} type="text" />
        <select
          onChange={(e) => setSelceted(e.target.value)}
          className={styles.select}
          name="task"
          id="task"
        >
          <option className={styles.option} value="important">
            Important
          </option>
          <option className={styles.option} value="middle">
            Middle
          </option>
          <option className={styles.option} value="lite">
            Lite
          </option>
        </select>
        <Button
          sx={FormBtn}
          className={`${styles.btn} ${
            !date.inputValid || !title.inputValid || !descr.inputValid
              ? styles.disabled
              : styles.enabled
          }`}
          type="submit"
          value="Отправить"
          disabled={
            !date.inputValid || !title.inputValid || !descr.inputValid
              ? true
              : false
          }
        >
          Save
        </Button>
      </form>
    </Box>
  );
};
export default CreateTodo;
