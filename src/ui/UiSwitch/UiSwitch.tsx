import styles from "./UiSwitch.module.scss";
import close from "../../assets/svg/Close.svg";
import open from "../../assets/svg/Open.svg";
import Image from "next/image";
import { FC, MouseEvent, useContext, useState } from "react";
import { ISwitch } from "@/components/types/types";
import { StoreContext } from "@/store/store";

const UiSwitch: FC<ISwitch> = ({ active, setBoolean, setTodo, keyId }) => {
  const { todayTodo} = useContext(StoreContext);
  const [sw,setsw]=useState(active)
  const toogle = (e: MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setBoolean ? setBoolean(!active) : null;
    const data = todayTodo.forEach((td) => {
      if (td.id == keyId) {
        td.switched = !active;
      }
    });
    setsw(!sw)
    console.log(data);
    if (setTodo) {
      setTodo(
        todayTodo.map((obj) => {
          if (obj.id == keyId) {
            return {...obj,switched:!sw};
          }
            return obj;
          
        })
      );
    }
    console.log(todayTodo);
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
