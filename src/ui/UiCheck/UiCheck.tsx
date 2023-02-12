import Image from "next/image";
import { useContext } from "react";

import True from "../../assets/svg/True.svg";
import { StoreContext } from "@/store/store";
import styles from "./UiCheck.module.scss";

const UiCheck = () => {
  const { checked, setChecked } = useContext(StoreContext);
  return (
    <div className={styles.check} onClick={() => setChecked((prev) => !prev)}>
      <div className={styles.square}>
        {checked ? (
          <Image className={styles.image} src={True} alt="Check" />
        ) : null}
      </div>
    </div>
  );
};
export default UiCheck;
