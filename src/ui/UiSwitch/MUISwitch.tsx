import { createTheme, makeStyles, Switch, withStyles } from "@mui/material";
import React from "react";
import { isClassExpression } from "typescript";
import clsx from "clsx";

import open from "../../assets/svg/Open.svg";
import { red } from "@mui/material/colors";

const MUISwitch = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      sx={{
        width:'100px',
        height:'50px',
        color: 'success.main',
        '& .MuiSwitch-thumb': {
            marginTop:'6px',
            marginLeft:'5px',
            width:'25.7px',
            height:'24.9px',
            '&:before': {
                content: "''",
                position: 'absolute',
                width: '100%',
                height: '100%',
                left: 0,
                top: 0,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(${open})`,
            },
        },
        '& .MuiSwitch-track': {
            width:'50.7px',
            height:'29.9px',
            borderRadius: '20px',
            backgroundColor: '#366EFF',
            opacity:85,
            '&.Mui-checked': {
                transform: 'translateX(16px)',
                color: '#fff',
                
                '& + .MuiSwitch-track': {
                    backgroundColor: '#10C200',
                    opacity: 1,
                    border: 0,
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: 0.5,
                },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
                color: '#33cf4d',
                border: '6px solid #fff',
            },
            
          },
      }}
    />
  );
};
export default MUISwitch;
