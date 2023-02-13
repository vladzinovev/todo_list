
import { FC,useState } from "react";

import { ISwitch } from "@/types/types";
import { FormControlLabel, styled, Switch, SwitchProps } from "@mui/material";

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 50.71,
  height: 29.09,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",

    "& + .MuiSwitch-track": {
      boxShadow: "inset 0px 0px 10px 3px rgba(0, 0, 0, 0.25)",
      borderRadius: "20px",
      backgroundColor: "#366EFF",
    },
    "&.Mui-checked": {
      transform: "translateX(22px)",
      color: "#fff",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url(/svg/Open.svg)`,
      },
      "& + .MuiSwitch-track": {
        backgroundColor: "#10C200",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 25,
    height: 25,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url(/svg/Close.svg)`,
    },
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const UiSwitch: FC<ISwitch> = ({
  active,
  setBoolean,
  todoNow,
  setTodo,
  keyId,
}) => {
  const [sw, setsw] = useState(active);
  const toogle = () => {
    setBoolean ? setBoolean(!active) : null;

    setsw(!sw);
    if (setTodo && todoNow) {
      setTodo(
        todoNow?.map((obj) => {
          if (obj.id == keyId) {
            return { ...obj, switched: !sw };
          }
          return obj;
        })
      );
    }
  };
  return (
    <FormControlLabel
      control={
        <IOSSwitch
          checked={sw}
          onChange={toogle}
          sx={{ m: 1 }}
          defaultChecked
        />
      }
      label=""
    />
  );
};
export default UiSwitch;
