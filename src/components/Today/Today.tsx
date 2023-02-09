import UiCheck from "../../ui/UiCheck/UiCheck";
import styles from "./Today.module.scss";
const Today = () => {
    return (
      <div className={styles.today}>
        <div className={styles.heading}>
            <UiCheck/> 
            <p className={styles.title}>Today Tasks:</p>
        </div>
      </div>
    );
  };
  export default Today;