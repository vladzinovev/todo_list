import { useContext, useState } from "react";
import {
  Box,
  Avatar,
  Menu,
  MenuList,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import UiSwitch from "@/ui/UiSwitch/UiSwitch";
import { StoreContext } from "@/store/store";
import {
  BoxNavbar,
  BoxNavbatBtn,
  BoxNavbarBtnB,
  BoxNavbarBtnAvatar,
  NavbarMenu,
  NavbarMenuList,
  AccordionNavbar,
  AccordionBox,
  AccordionDetailsBox,
} from "./NavbarStyle";
import Button from "@mui/material/Button";
import React from "react";
import Typography from "@mui/material/Typography";
import CreateTodo from "../CreateTodo/CreateTodo";

const Navbar = () => {
  const {
    newsOpen,
    setNewsOpen,
    oldTodoOpen,
    setOldTodoOpen,
  } = useContext(StoreContext);

  const [expanded, setExpanded] = useState<boolean>(true);

  const [settingsEl, setSettingsEl] = useState<null | HTMLElement>(null);
  const open = Boolean(settingsEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setSettingsEl(event.currentTarget);
  };
  const handleClose = () => {
    setSettingsEl(null);
  };

  return (
    <>
      <Accordion sx={AccordionNavbar} expanded={expanded} onChange={()=>setExpanded(!expanded)}>
        <Box sx={AccordionBox}>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography sx={BoxNavbatBtn}>To Do</Typography>
          </AccordionSummary>
          <Button
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            sx={BoxNavbarBtnB}
            onClick={handleClick}
          >
            <Avatar
              variant="rounded"
              src="/svg/Settings.svg"
              sx={BoxNavbarBtnAvatar}
            />
          </Button>
        </Box>
        <AccordionDetails sx={AccordionDetailsBox}>
          <CreateTodo />
        </AccordionDetails>
      </Accordion>

      <Box sx={BoxNavbar}>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={settingsEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          sx={NavbarMenu}
        >
          <Typography component="h2" ml={5}>
            SETTINGS
          </Typography>
          <MenuList sx={NavbarMenuList}>
            <Typography component="div" mt={1}>
              News
            </Typography>
            <UiSwitch
              active={newsOpen}
              setBoolean={setNewsOpen}
              todoNow={undefined}
              setTodo={undefined}
              keyId={undefined}
            />
          </MenuList>
          <MenuList sx={NavbarMenuList}>
            <Typography component="div" mt={1}>
              Old ToDo
            </Typography>
            <UiSwitch
              active={oldTodoOpen}
              setBoolean={setOldTodoOpen}
              todoNow={undefined}
              setTodo={undefined}
              keyId={undefined}
            />
          </MenuList>
        </Menu>
      </Box>
    </>
  );
};
export default Navbar;
