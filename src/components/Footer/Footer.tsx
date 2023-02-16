import { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Box, Typography } from "@mui/material";

import { StoreContext } from "@/store/store";
import styles from "./Footer.module.scss";
import { INewsItemType } from "@/types/types";
import axios from "axios";

const NEWS_URL = "https://hacker-news.firebaseio.com/v0/newstories.json";
const ITEM_URL = "https://hacker-news.firebaseio.com/v0/item/";
const req = new Request(NEWS_URL);

const Footer = () => {
  const { newsOpen } = useContext(StoreContext);
  const [posts, setPosts] = useState<INewsItemType[]>([]);
  const [errorTwo, setErrorTwo] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  const { isLoading, error, data } = useQuery<INewsItemType[], Error>(
    "repoData",
    () =>
      fetch(req)
        .then((res) => res.json())
        .then(function (data) {
          return data?.map((id: INewsItemType) =>
            axios
              .get(`${ITEM_URL}${id}.json`)
              .then((response) => {
                setPosts((pos) => [...pos, response.data]);
              })
              .catch((error) => {
                setErrorTwo(true);
                setErrorMessage(error.message);
              })
          );
        })
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
              {(error || errorTwo) && (
                <Typography className={styles.status}>
                  {errorMessage} {error?.message}
                </Typography>
              )}
              {posts?.map((post) => post?.title + " |----> Next news: ")}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};
export default Footer;
