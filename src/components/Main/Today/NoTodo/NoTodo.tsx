import { FC } from "react";
import { Box, Typography } from "@mui/material";

import { INoTodo } from "@/types/types";
import { BoxItemTypography } from "./NoTodoStyle";
import { BoxItem } from "../TodayStyle";

const NoTodo: FC<INoTodo> = ({ text }) => {
  return (
    <Box sx={BoxItem}>
      <Typography sx={BoxItemTypography}>{text}</Typography>
    </Box>
  );
};
export default NoTodo;
