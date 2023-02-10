import * as React from "react";
import settings from "../../assets/svg/Settings.svg";
import Image from "next/image";

import styles from "./Navbar.module.scss";
import UiSwitch from "@/ui/UiSwitch/UiSwitch";
import { Switch } from "@/ui/UiSwitch/Switch";
import MUISwitch from "@/ui/UiSwitch/MUISwitch";


const Navbar=()=> {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.navbar} style={{ position: "relative" }}>
      <div className={styles.btn_navbar}>
        <button className={styles.btn_open}><p className={styles.text}>To Do</p></button>
        <button className={styles.btn_settings}>
          <Image onClick={handleDrawerToggle} src={settings} alt="Settings" />
        </button>
      </div>

      {mobileOpen && (
        <div
          className={styles.mobile_block}
          style={{ textAlign: "center", float: "right" }}
        >
          <p>SETTINGS</p>
          <div className={styles.settings}>
            <div className={styles.flex}>
              <p>News</p>
              <UiSwitch active={true}/>
            </div>
            <div className={styles.flex}>
              <p>Old ToDo</p>
              <UiSwitch/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Navbar;
