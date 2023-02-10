import styles from "./UiCheck.module.scss";
import True from "../../assets/svg/True.svg";
import Image from "next/image";
import { useState } from "react";

const UiCheck = () => {
    const [checked,setChecked]=useState(false);

    const toogle=(e:any)=>{
        e.preventDefault();
        setChecked(!checked)
    }
  return (
    <div className={styles.check} onClick={(e:any)=>toogle(e)}> 
      <div className={styles.square}>
        {checked ? <Image className={styles.image} src={True} alt="Check"/> : null}
      </div>
    </div>
  );
};
export default UiCheck;