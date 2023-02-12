import { useContext } from "react";

import { StoreContext } from "@/store/store";
import Navbar from "./Navbar/Navbar";
import Today from "./Today/Today";
import CreateTodo from "./CreateTodo/CreateTodo";
import Days from "./Days/Days";
import NoTodo from "./Today/NoTodo/NoTodo";
import Footer from "./Footer/Footer";

import styles from "./Main.module.scss";

const Main = () => {
  const {
    createTodoOpen,
    oldTodoOpen,
    oldTodo,
    newTodo,
    setOldTodo,
    setNewTodo,
  } = useContext(StoreContext);

  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <Navbar />
        {createTodoOpen && <CreateTodo />}
        {oldTodoOpen ? (
          oldTodo.length ? (
            <Days todoDay={oldTodo} setTodoDay={setOldTodo} />
          ) : (
            <NoTodo text="There are no old tasks" />
          )
        ) : null}
        <Today />
        <Days todoDay={newTodo} setTodoDay={setNewTodo} />
        <Footer />
      </div>
    </section>
  );
};
export default Main;
