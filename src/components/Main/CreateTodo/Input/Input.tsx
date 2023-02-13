import { IInput } from "@/types/types";
import Typography from "@mui/material/Typography";
import { TypographyError } from "../CreateTodoStyle";
import styles from "./Input.module.scss";

const Input = ({ idLabel, type, title }: IInput) => {
  return (
    <>
      {title?.isDirty && title.minLengthError && (
        <Typography sx={TypographyError}>Мало букв</Typography>
      )}
      {title?.isDirty && title.maxLengthError && (
        <Typography sx={TypographyError}>Длинный текст</Typography>
      )}
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
    </>
  );
};
export default Input;
