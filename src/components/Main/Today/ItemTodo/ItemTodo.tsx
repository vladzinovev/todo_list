import { FC } from "react";

import { IItemTodo } from "@/types/types";
import UiSwitch from "@/ui/UiSwitch/UiSwitch";
import styles from "./ItemTodo.module.scss";
import { Box, Card, CardContent, Typography } from "@mui/material";
import {
  CardBoxColor,
  CardItem,
  CardItemContent,
  CardTypography,
  CardTypographyDescr,
} from "./ItemTodoStyle";

const ItemTodo: FC<IItemTodo> = ({ todo, key, todoNow, setTodo }) => {
  return (
    <Card key={key} sx={CardItem}>
      <Box
        sx={CardBoxColor}
        className={`${
          todo?.selected == "important"
            ? styles.important
            : todo?.selected == "middle"
            ? styles.middle
            : styles.lite
        } `}
      ></Box>
      <CardContent sx={CardItemContent}>
        <Typography
          sx={CardTypography}
          className={`${todo?.switched && styles.decoration}`}
        >
          {todo?.title}
        </Typography>
        <Typography className={styles.descr} sx={CardTypographyDescr}>
          {todo?.descr}
        </Typography>
      </CardContent>
      <Box  mt='20px' width='100px' >
        <UiSwitch
          active={todo.switched}
          setBoolean={undefined}
          todoNow={todoNow}
          setTodo={setTodo}
          keyId={todo.id}
        />
      </Box>
    </Card>
  );
};
export default ItemTodo;
