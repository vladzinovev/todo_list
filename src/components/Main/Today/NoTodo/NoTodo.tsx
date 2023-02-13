import { FC } from "react";

import { INoTodo } from "@/types/types";
import { Box, Typography } from "@mui/material";
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
