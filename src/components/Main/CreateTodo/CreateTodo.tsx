import { ITodo } from "@/components/types/types";
import { useInput } from "@/hook/useInput";
import { StoreContext } from "@/store/store";
import { calculateDate } from "@/utils/calculateDate";
import { useContext, useEffect, useState } from "react";


import styles from "./CreateTodo.module.scss";
import Input from "./Input/Input";

const CreateTodo = () => {
  const { todayTodo,settingsOpen,setTodayTodo, setOldTodo, setNewTodo,id,setId } = useContext(StoreContext);
  const date = useInput("", { isEmpty: true });
  const title = useInput("", { isEmpty: true, minLength: 2, maxLength: 18 });
  const descr = useInput("", { isEmpty: true, minLength: 2, maxLength: 50 });
  const [selected, setSelceted] = useState("important");
  const [data, setData] = useState<ITodo>();

  function handleSubmit(e: any) {
    e.preventDefault();
    setData({
      id:id,
      date:date?.value,
      title:title.value,
      descr:descr.value,
      selected:selected,
      switched:false,
    });
    console.log(data)
    
  }
  useEffect(()=>{
    setId(prev=>prev+1);
    calculateDate(date.value,  setOldTodo,setTodayTodo, setNewTodo, data);
    
    console.log(data)
    console.log(todayTodo)
  },[data])

  return (
    <div className={`${styles.create} ${settingsOpen && styles.no_click}`}>
      <form
        className={styles.form}
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
      >
        <div
          className={`${styles.color} ${
            selected == "important"
              ? styles.important
              : selected == "middle"
              ? styles.middle
              : styles.lite
          } `}
        ></div>
        <Input idLabel="date" title={date} type="date" />
        <Input idLabel="title" title={title} type="text" />
        <Input idLabel="descr" title={descr} type="text" />
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
          Save
        </button>
      </form>
    </div>
  );
};
export default CreateTodo;
