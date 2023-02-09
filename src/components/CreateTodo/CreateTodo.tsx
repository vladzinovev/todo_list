import styles from "./CreateTodo.module.scss";

const CreateTodo = () => {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div className={styles.create}>
      <form
        className={styles.form}
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
      >
        <div className={styles.color}></div>
        <input className={styles.input} type="date" required />
        <input className={styles.input} type="text" required />
        <input className={styles.input} type="text" required />
        <select className={styles.input} name="task" id="task">
          <option className={styles.option} value="important">Important</option>
          <option className={styles.option} value="middle">Middle</option>
          <option className={styles.option} value="lite">Lite</option>
        </select>

        <button className={styles.btn} type="submit" value="Отправить">
          Отправить
        </button>
      </form>
    </div>
  );
};
export default CreateTodo;
