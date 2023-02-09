import styles from "./UiCheck.module.scss";
import check from "../../assets/svg/Open.svg";
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
        {checked ? <Image className={styles.image} src={check} alt="Check"/> : null}
      </div>
    </div>
  );
};
export default UiCheck;