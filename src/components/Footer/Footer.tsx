import { useContext } from "react";
import { useQuery } from "react-query";
import { Box, Typography } from "@mui/material";

import { StoreContext } from "@/store/store";
import styles from "./Footer.module.scss";
import { INews } from "@/types/types";

export const API_URL =
  "https://newsapi.org/v2/everything?" +
  "q=tesla&" +
  "from=2023-01-28&" +
  "sortBy=publishedAt&" +
  "apiKey=871c399c168b49c883daae36ba6aaa50";
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
