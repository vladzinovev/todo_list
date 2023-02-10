import UiSwitch from "@/ui/UiSwitch/UiSwitch";
import UiCheck from "../../ui/UiCheck/UiCheck";
import styles from "./Today.module.scss";
const Today = () => {
  return (
    <div className={styles.today}>
      <div className={styles.heading}>
        <UiCheck />
        <p className={styles.title}>Today Tasks:</p>
      </div>
      <div className={styles.description}>
        <div className={styles.todo}>
          <div className={styles.color}></div>
          <div className={styles.main}>
            <p className={styles.title}>Visit David</p>
            <p className={styles.descr}>Lorem Ipsum Dolor</p>
          </div>
          <div className={styles.switch}>
            <UiSwitch />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Today;
