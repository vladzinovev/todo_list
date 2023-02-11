import settings from "../../../assets/svg/Settings.svg";
import Image from "next/image";

import styles from "./Navbar.module.scss";
import UiSwitch from "@/ui/UiSwitch/UiSwitch";
import { StoreContext } from "@/store/store";
import { useContext } from "react";
import { ClickAwayListener } from "@mui/material";

const Navbar = () => {
  const {
    newsOpen,
    setNewsOpen,
    oldTodoOpen,
    setOldTodoOpen,
    settingsOpen,
    setSettingsOpen,
    createTodoOpen,
    setCreateTodoOpen,
    todayTodo,
    setTodayTodo,
    oldTodo,
    setOldTodo,
    newTodo,
    setNewTodo,
    id,
    setId,
  } = useContext(StoreContext);

  const handleCreateToogle=()=>{
    setCreateTodoOpen(prev => !prev)
  }
  const handleDrawerToggle = () => {
    setSettingsOpen((prev) => !prev);
  };

  return (
    <div className={styles.navbar} style={{ position: "relative" }}>
      <div className={styles.btn_navbar}>
        <button
          className={`${styles.btn_open} ${settingsOpen && styles.no_click}`}
          
        >
          <p className={styles.text} onClick={handleCreateToogle}>To Do</p>
        </button>
        <button className={styles.btn_settings}>
          <Image onClick={handleDrawerToggle} src={settings} alt="Settings" />
        </button>
      </div>

      {settingsOpen && (
        <ClickAwayListener onClickAway={() => setSettingsOpen(false)}>
          <div
            className={styles.mobile_block}
            style={{ textAlign: "center", float: "right" }}
          >
            <p>SETTINGS</p>
            <div className={styles.settings}>
              <div className={styles.flex}>
                <p>News</p>
                <UiSwitch active={newsOpen} setBoolean={setNewsOpen} setTodo={undefined} keyId={undefined}/>
              </div>
              <div className={styles.flex}>
                <p>Old ToDo</p>
                <UiSwitch active={oldTodoOpen} setBoolean={setOldTodoOpen} setTodo={undefined} keyId={undefined}/>
              </div>
            </div>
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
};
export default Navbar;
