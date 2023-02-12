import Image from "next/image";
import { FC, MouseEvent, useContext, useState } from "react";

import styles from "./UiSwitch.module.scss";
import close from "../../assets/svg/Close.svg";
import open from "../../assets/svg/Open.svg";
import { ISwitch } from "@/types/types";

const UiSwitch: FC<ISwitch> = ({
  active,
  setBoolean,
  todoNow,
  setTodo,
  keyId,
}) => {
  const [sw, setsw] = useState(active);
  const toogle = (e: MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setBoolean ? setBoolean(!active) : null;

    setsw(!sw);
    if (setTodo && todoNow) {
      setTodo(
        todoNow?.map((obj) => {
          if (obj.id == keyId) {
            return { ...obj, switched: !sw };
          }
          return obj;
        })
      );
    }
  };
  return (
    <div
      className={`${styles.switch} ${sw ? styles.active : styles.not_active}`}
      onClick={(e: any) => toogle(e)}
    >
      <div className={styles.circle}>
        <Image
          className={styles.image}
          src={sw ? open : close}
          alt="Settings"
        />
      </div>
    </div>
  );
};
export default UiSwitch;
