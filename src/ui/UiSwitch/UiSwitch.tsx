import styles from "./UiSwitch.module.scss";
import close from "../../assets/svg/Close.svg";
import open from "../../assets/svg/Open.svg";
import Image from "next/image";
import { FC, MouseEvent, useContext, useState } from "react";
import { ISwitch } from "@/components/types/types";
import { StoreContext } from "@/store/store";

const UiSwitch: FC<ISwitch> = ({ active, setBoolean, todoNow, setTodo, keyId }) => {
  const { todayTodo} = useContext(StoreContext);
  const [sw,setsw]=useState(active)
  const toogle = (e: MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setBoolean ? setBoolean(!active) : null;
    
    setsw(!sw)
    console.log(todoNow)
    console.log(setTodo)
    if (setTodo && todoNow) {
      setTodo(
        todoNow?.map((obj) => {
          if (obj.id == keyId) {
            return {...obj,switched:!sw};
          }
            return obj;
          
        })
      );
    }
    console.log(todoNow);
  };
  return (
    <div
      className={`${styles.switch} ${
        sw ? styles.active : styles.not_active
      }`}
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
