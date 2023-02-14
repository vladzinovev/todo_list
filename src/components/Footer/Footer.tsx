import { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Box, Typography } from "@mui/material";

import { StoreContext } from "@/store/store";
import styles from "./Footer.module.scss";
import { INews } from "@/types/types";
import axios from "axios";


const NEWS_URL = 'https://hacker-news.firebaseio.com/v0/newstories.json'
const ITEM_URL = 'https://hacker-news.firebaseio.com/v0/item/'
const req = new Request(NEWS_URL);
export interface INewsItemType {
  by: string;
  descendants: number;
  id: number;
  kids?: [];
  score: number;
  time: number;
  title?: string;
  type: string;
  url: string;
} 

const Footer = () => {
  /* const { newsOpen } = useContext(StoreContext);

  const { isLoading, error, data } = useQuery<INews, Error>("repoData", () =>
    fetch(req).then((res) => res.json())
  ); */
  const { newsOpen } = useContext(StoreContext);
  const { isLoading, error, data } = useQuery<INewsItemType[], Error>("repoData", () =>
    fetch(req).then((res) => res.json())
  );
  const [posts, setPosts] = useState<INewsItemType[]>([]);
  
  useEffect(()=>{
    data?.map(async (id: INewsItemType) => {
      await axios
        .get(`${ITEM_URL}${id}.json`)
        .then((response) => {
          setPosts((pos: any) => [...pos, response.data]);
        })
    });
    console.log(posts);
  },[data])

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
              {posts?.map(
                (post) =>
                  post?.title + " |----> Next news: "
              )}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};
export default Footer;
