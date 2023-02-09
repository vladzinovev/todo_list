
import styles from "./Items.module.scss";
const Items = () => {
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
    }
  
    return (
      <div className={styles.create}>
      </div>
    );
  };
  export default Items;