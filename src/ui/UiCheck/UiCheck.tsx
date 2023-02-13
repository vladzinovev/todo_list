import { useContext } from "react";

import CheckIcon from "@mui/icons-material/Check";
import { StoreContext } from "@/store/store";
import { Box, Button } from "@mui/material";
import { BoxCheck, BoxImage } from "./UiCheckStyle";

const UiCheck = () => {
  const { checked, setChecked } = useContext(StoreContext);
  return (
    <Box sx={BoxCheck} onClick={() => setChecked((prev) => !prev)}>
      {checked ? (
        <Button startIcon={<CheckIcon />} sx={BoxImage}></Button>
      ) : null}
    </Box>
  );
};
export default UiCheck;
