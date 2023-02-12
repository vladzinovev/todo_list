import { API_URL } from "@/services/news.service";
import { StoreContext } from "@/store/store";
import { useContext, useState } from "react";
import { useQuery } from "react-query";

import styles from "./Footer.module.scss";
const req = new Request(API_URL);

const Footer = () => {
  const { newsOpen } = useContext(StoreContext);
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(req).then((res) => res.json())
  );

  return (
    <>
      {newsOpen && (
        <div className={styles.wrap}>
          <div className={styles.items_wrap}>
            <div className={styles.items}>
              {isLoading && <p className={styles.status}>...Loading</p>}
              {error && <p className={styles.status}>{error.message}</p>}
              {data?.articles.map(
                (article: { content: string }) =>
                  article.content + " |----> Next news: "
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Footer;
