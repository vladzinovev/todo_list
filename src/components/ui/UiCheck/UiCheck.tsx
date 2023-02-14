import { useContext } from "react";
import { Box, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

import { BoxCheck, BoxImage } from "./UiCheckStyle";
import { StoreContext } from "@/store/store";

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
