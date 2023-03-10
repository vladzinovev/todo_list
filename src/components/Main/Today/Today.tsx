import { useContext } from "react";
import { Box, Typography } from "@mui/material";

import UiCheck from "@/components/ui/UiCheck/UiCheck";
import { BoxItem, BoxToday, TodayTypography } from "./TodayStyle";
import { StoreContext } from "@/store/store";
import ItemTodo from "./ItemTodo/ItemTodo";
import NoTodo from "../NoTodo/NoTodo";

const Today = () => {
  const { checked, todayTodo, setTodayTodo } = useContext(StoreContext);

  return (
    <>
      <Box sx={BoxToday}>
        <UiCheck />
        <Typography sx={TodayTypography}>Today Tasks:</Typography>
      </Box>
      {checked ? (
        todayTodo.length ? (
          <Box mt="12px" sx={BoxItem}>
            {todayTodo.map((todo) => (
              <ItemTodo
                todo={todo}
                key={todo?.id}
                todoNow={todayTodo}
                setTodo={setTodayTodo}
              />
            ))}
          </Box>
        ) : (
          <NoTodo text="There are no tasks today" />
        )
      ) : null}
    </>
  );
};
export default Today;
