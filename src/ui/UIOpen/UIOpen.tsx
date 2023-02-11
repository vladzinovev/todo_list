import { FC, useState } from "react";
import styles from "./UiOpen.module.scss";
import arrow from "../../assets/svg/Arrow.svg";
import arrowUp from "../../assets/svg/ArrowUp.svg";
import Image from "next/image";
import { IUiOpen } from "@/components/types/types";

const UiOpen:FC<IUiOpen> = ({action,setAction}) => {
    const [checkeds,setCheckeds] = useState(action);
    const toggle=()=>{
      setCheckeds(!checkeds);
      setAction(!checkeds);
    }
    return (
      <div className={styles.open} onClick={toggle}> 
        <div className={styles.circle}>
          <Image className={styles.image} src={checkeds?arrowUp:arrow} alt="Arrow"/>
        </div>
      </div>
    );
};
export default UiOpen;
