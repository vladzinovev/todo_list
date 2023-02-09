import { Box } from "@mui/material";
import CreateTodo from "../CreateTodo/CreateTodo";
import Navbar from "../Navbar/Navbar";
import styles from "./Main.module.scss";

const Main = () => {
  return (
  <section className={styles.main}>
    <div className={styles.container}>
        <Navbar/>
        <CreateTodo/>
     
    </div>
  </section>
  )
};
export default Main;
