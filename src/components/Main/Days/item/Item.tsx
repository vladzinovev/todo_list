import { FC } from "react";
import Card from "@mui/material/Card";
import { Box, CardContent, Typography } from "@mui/material";

import ItemTodo from "@/components/Main/Today/ItemTodo/ItemTodo";
import { converterDate } from "@/utils/converterDate";
import { IItem } from "@/types/types";
import { BoxItem } from "../../Today/TodayStyle";
import UiOpen from "@/components/ui/UiOpen/UiOpen";
import {
  CardBoxColor,
  CardContentMain,
  CardItem,
  CardTypography,
} from "./ItemStyle";

const Item: FC<IItem> = ({ key, td, todoDay, setTodoDay }) => {

  return (
    <Box mt="30px" sx={BoxItem} key={key}>
      <Card sx={CardItem}>
        <Box sx={CardBoxColor} />
        <CardContent sx={CardContentMain}>
          <Typography sx={CardTypography}>
            {converterDate(td.date) + " Tasks"}
          </Typography>
        </CardContent>
        <Box mt="28px" ml="20px">
          <UiOpen td={td} todoDay={todoDay} setTodoDay={setTodoDay} />
        </Box>
      </Card>
      {td?.open &&
        todoDay.map((nt) => (
          <>
            {nt.date == td.date ? (
              <ItemTodo
                todo={nt}
                key={nt.id}
                todoNow={todoDay}
                setTodo={setTodoDay}
              />
            ) : null}
          </>
        ))}
    </Box>
  );
};
export default Item;
