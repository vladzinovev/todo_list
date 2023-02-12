import { FC, useEffect, useState } from "react";
import Image from "next/image";

import arrow from "../../assets/svg/Arrow.svg";
import arrowUp from "../../assets/svg/ArrowUp.svg";
import { IUiOpen } from "@/types/types";
import styles from "./UiOpen.module.scss";

const UiOpen: FC<IUiOpen> = ({ td, todoDay, setTodoDay }) => {
  const [checkeds, setCheckeds] = useState(td.open);
  const toggle = () => {
    setCheckeds(!checkeds);
    if (setTodoDay && todoDay) {
      setTodoDay(
        todoDay?.map((obj) => {
          if (obj.id == td.id) {
            return { ...obj, open: !checkeds };
          }
          return obj;
        })
      );
    }
  };
  useEffect(() => {
    setCheckeds(td.open);
  }, [todoDay]);
  return (
    <div className={styles.open} onClick={toggle}>
      <div className={styles.circle}>
        <Image
          className={styles.image}
          src={checkeds ? arrowUp : arrow}
          alt="Arrow"
        />
      </div>
    </div>
  );
};
export default UiOpen;
