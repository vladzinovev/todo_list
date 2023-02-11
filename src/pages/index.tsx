
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.scss";
import Main from "@/components/Main/Main";
import Header from "@/components/Head/Head";

export default function Home() {
  return (
    <div className={styles.home}>
      <Header/>
      <main>
        <Main />
      </main>
    </div>
  );
}
