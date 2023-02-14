import { FC } from "react";
import { Box, Card, CardContent, Tooltip, Typography } from "@mui/material";
import cx from "classnames";

import UiSwitch from "@/components/ui/UiSwitch/UiSwitch";
import { IItemTodo } from "@/types/types";
import {
  CardBoxColor,
  CardItem,
  CardItemContent,
  CardTypography,
  CardTypographyDescr,
} from "./ItemTodoStyle";
import styles from "./ItemTodo.module.scss";

const ItemTodo: FC<IItemTodo> = ({ todo, key, todoNow, setTodo }) => {
  return (
    <Card key={key} sx={CardItem}>
      <Box
        sx={CardBoxColor}
        className={cx({
          [styles.important]: todo?.selected == "important",
          [styles.middle]: todo?.selected == "middle",
          [styles.lite]: todo?.selected == "lite",
        })}
      ></Box>
      <CardContent sx={CardItemContent}>
        <Typography
          sx={CardTypography}
          className={`${todo?.switched && styles.decoration}`}
        >
          {todo?.title}
        </Typography>
        <Tooltip title={todo?.descr}>
          <Typography className={styles.descr} sx={CardTypographyDescr}>
            {todo?.descr.length < 26
              ? todo?.descr
              : todo?.descr.substr(0, 26) + "..."}
          </Typography>
        </Tooltip>
      </CardContent>
      <Box mt="20px" width="100px">
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
