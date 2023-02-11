
import { StoreContext } from "@/store/store";
import { useContext } from "react";
import Navbar from "./Navbar/Navbar";
import Today from "./Today/Today";
import styles from "./Main.module.scss";
import CreateTodo from "./CreateTodo/CreateTodo";

const Main = () => {
  const {createTodoOpen, settingsOpen,setSettingsOpen } =useContext(StoreContext);
  return (
  <section className={styles.main} >
    <div className={styles.container}>
        <Navbar/>
        {createTodoOpen&&<CreateTodo/>}
        <Today/>
        <NewDays/>
     
    </div>
  </section>
  )
};
export default Main;
