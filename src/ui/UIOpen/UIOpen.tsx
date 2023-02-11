import { useState } from "react";
import styles from "./UiOpen.module.scss";
import arrow from "../../assets/svg/Arrow.svg";
import arrowUp from "../../assets/svg/ArrowUp.svg";
import Image from "next/image";
const UiOpen = ({action}:any) => {
    const [checkeds,setCheckeds] = useState(action);
    return (
      <div className={styles.open} onClick={()=>setCheckeds(!checkeds)}> 
        <div className={styles.circle}>
          <Image className={styles.image} src={checkeds?arrowUp:arrow} alt="Arrow"/>
        </div>
      </div>
    );
};
export default UiOpen;
