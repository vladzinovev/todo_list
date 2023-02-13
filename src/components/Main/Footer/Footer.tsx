import { useContext } from "react";
import { useQuery } from "react-query";
import { Box, Typography } from "@mui/material";

import { StoreContext } from "@/store/store";
import styles from "./Footer.module.scss";
import { INews } from "@/types/types";
import { API_URL } from "@/services/news.service";

const req = new Request(API_URL);

const Footer = () => {
  const { newsOpen } = useContext(StoreContext);

  const { isLoading, error, data } = useQuery<INews, Error>("repoData", () =>
    fetch(req).then((res) => res.json())
  );

  return (
    <>
      {newsOpen && (
        <Box className={styles.wrap}>
          <Box className={styles.items_wrap}>
            <Box className={styles.items}>
              {isLoading && (
                <Typography className={styles.status}>...Loading</Typography>
              )}
              {error && (
                <Typography className={styles.status}>
                  {error?.message}
                </Typography>
              )}
              {data?.articles?.map(
                (article: { content: string }) =>
                  article.content + " |----> Next news: "
              )}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};
export default Footer;
