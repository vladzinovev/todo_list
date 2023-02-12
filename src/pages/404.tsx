import Image from "next/image";
import Link from "next/link";

import error from "../assets/gif/error.gif";
import styles from "../styles/Page404.module.scss";

const Page404 = () => (
        <section className={styles.page404}>
        <p className={styles.error}>404</p>
        <p className={styles.not_found}>страница не найдена</p>
    
        <Image className={styles.img} alt="error" src={error} />
        <p className={styles.description}>
          страница, на которую вы пытаетесь попасть, не существует или была удалена.
        </p>
        <button className={styles.btn}>
          <Link className={styles.link} href={"/"}>
            Вернуться на главную страницу
          </Link>
        </button>
      </section>
  );
  export default Page404;