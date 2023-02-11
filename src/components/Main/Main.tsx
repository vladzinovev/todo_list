import { StoreContext } from "@/store/store";
import { SetStateAction, useContext } from "react";
import Navbar from "./Navbar/Navbar";
import Today from "./Today/Today";
import styles from "./Main.module.scss";
import CreateTodo from "./CreateTodo/CreateTodo";
import Days from "./CreateTodo/Days/Days";
import NoTodo from "./Today/NoTodo/NoTodo";

const Main = () => {
  const { createTodoOpen,oldTodoOpen,oldTodo,newTodo,setOldTodo,setNewTodo } =
    useContext(StoreContext);

  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <Navbar />
        {createTodoOpen && <CreateTodo />}
        {oldTodoOpen ? oldTodo.length? <Days todoDay={oldTodo} setTodoDay={setOldTodo}/>:<NoTodo text='There are no old tasks'/>:null}
        <Today />
        <Days todoDay={newTodo} setTodoDay={setNewTodo}/>
      </div>
    </section>
  );
};
export default Main;
