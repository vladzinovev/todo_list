import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { Box } from "@mui/material";

import arrow from "../../../assets/svg/Arrow.svg";
import arrowUp from "../../../assets/svg/ArrowUp.svg";
import { IUiOpen } from "@/types/types";

const UiOpen: FC<IUiOpen> = ({ td, todoDay, setTodoDay }) => {
  const [checkeds, setCheckeds] = useState(td.open);

  const toggle = () => {
    setCheckeds(!checkeds);
    if (setTodoDay && todoDay) {
      setTodoDay(
        todoDay?.map((obj) => {
          if (obj.id == td.id) {
            return { ...obj, open: !checkeds };
          }
          return obj;
        })
      );
    }
  };

  useEffect(() => {
    setCheckeds(td.open);
  }, [todoDay]);

  return (
    <Box mt="3px" sx={{ cursor: "pointer" }} onClick={toggle}>
      <Image src={checkeds ? arrowUp : arrow} alt="Arrow" />
    </Box>
  );
};
export default UiOpen;
