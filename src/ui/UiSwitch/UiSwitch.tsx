import styles from "./UiSwitch.module.scss";
import close from "../../assets/svg/Close.svg";
import open from "../../assets/svg/Open.svg";
import Image from "next/image";
import { MouseEvent, useState } from "react";

const UiSwitch = ({active}:any) => {
    const [switched,setSwitched]=useState(active);

    const toogle=(e: MouseEvent<HTMLDivElement, MouseEvent>)=>{
        e.preventDefault();
        setSwitched(!switched)
    }
  return (
    <div className={`${styles.switch} ${switched?styles.active : styles.not_active}`} onClick={(e:any)=>toogle(e)}> 
      <div className={styles.circle}>
        
        <Image className={styles.image} src={switched?open:close} alt="Settings"/>
      </div>
    </div>
  );
};
export default UiSwitch;
