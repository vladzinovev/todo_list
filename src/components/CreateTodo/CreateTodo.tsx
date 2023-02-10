import { useInput } from "@/hook/useInput";
import { useState } from "react";

import styles from "./CreateTodo.module.scss";
import Input from "./Input/Input";

const CreateTodo = () => {
  const date = useInput("", { isEmpty: true });
  const title = useInput("", { isEmpty: true, minLength: 2, maxLength: 20 });
  const descr = useInput("", { isEmpty: true, minLength: 2, maxLength: 50 });
  const [selected, setSelceted] = useState("important");
  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(title);
    console.log(selected);
  }

  return (
    <div className={styles.create}>
      <form
        className={styles.form}
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
      >
        <div className={styles.color}></div>
        <Input idLabel="date" title={date} type='date'/>
        <Input idLabel="title" title={title} type='text'/>
        <Input idLabel="descr" title={descr} type='text'/>
        <select
          onChange={(e) => setSelceted(e.target.value)}
          className={styles.input}
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

        <button
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
          Отправить
        </button>
      </form>
    </div>
  );
};
export default CreateTodo;
