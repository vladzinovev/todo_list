import { NewsService } from "@/services/news.service";
import { useQuery } from "react-query";

import styles from "./Footer.module.scss";

const Footer = () => {
  const {
    isLoading,
    data: response,
    error,
  } = useQuery("news list", () => NewsService.getAll());
  return (
    <div className={styles.wrap}>
      <div className={styles.items_wrap}>
        <div className={styles.items}>
          Привет my Name is Vlad i am from london ваввввввв вааааааааааааа
          ваааааааааааа ваааааааааааааа ппппппппппп оооооооооооооооооо
          ллллллллллллл абрабабабабаббаба яяяяяяяяяяяя
        </div>
      </div>
    </div>
  );
};
export default Footer;
