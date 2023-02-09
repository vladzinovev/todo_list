
import CreateTodo from "../CreateTodo/CreateTodo";
import Items from "../Items/Items";
import Navbar from "../Navbar/Navbar";
import Today from "../Today/Today";
import styles from "./Main.module.scss";

const Main = () => {
  return (
  <section className={styles.main}>
    <div className={styles.container}>
        <Navbar/>
        <CreateTodo/>
        <Today/>
        <Items/>
     
    </div>
  </section>
  )
};
export default Main;
