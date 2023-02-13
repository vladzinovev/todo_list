import { useContext } from "react";

import { StoreContext } from "@/store/store";
import Navbar from "./Navbar/Navbar";
import Today from "./Today/Today";
import CreateTodo from "./CreateTodo/CreateTodo";
import Days from "./Days/Days";
import NoTodo from "./Today/NoTodo/NoTodo";
import Footer from "./Footer/Footer";

import { Box } from "@mui/material";
import { BoxMain } from "./MainStyles";

const Main = () => {
  const {
    oldTodoOpen,
    oldTodo,
    newTodo,
    setOldTodo,
    setNewTodo,
  } = useContext(StoreContext);

  return (
    <Box >
      <Box sx={BoxMain}>
        <Navbar />
        {oldTodoOpen ? (
          oldTodo.length ? (
            <Days todoDay={oldTodo} setTodoDay={setOldTodo} />
          ) : (
            <NoTodo text="There are no old tasks" />
          )
        ) : null}
        <Today />
        <Days todoDay={newTodo} setTodoDay={setNewTodo} />
        <Footer />
      </Box>
    </Box>
  );
};
export default Main;
