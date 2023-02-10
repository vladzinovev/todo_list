
import { IInput } from "@/components/types/types";
import styles from "./Input.module.scss";

const Input = ({
  idLabel,
  type,
  title
}: IInput) => {
  return (
    <div className={styles.input}>
      {title?.isDirty &&
          title.minLengthError && <div className={styles.error}>Мало букв</div>
      }
      {title?.isDirty &&
          title.maxLengthError && <div className={styles.error}>Длинный текст</div>
      }
      <input
        className={`${styles.input} ${title?.isEmpty ? styles.invalid : null}`}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          title?.onChange(e)
        }
        onBlur={() => title?.onBlur()}
        type={type}
        name={idLabel}
        id={idLabel}
        required
      />
    </div>
  );
};
export default Input;
