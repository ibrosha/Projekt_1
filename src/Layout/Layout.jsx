import React from "react";
import { Link, Outlet } from "react-router-dom";
import Account from "@mui/icons-material/AccountCircleOutlined";
import Local from "@mui/icons-material/LocalGroceryStoreOutlined";
import Search from "@mui/icons-material/SearchOutlined";
import Menu from "@mui/icons-material/MenuOutlined";
import Switcher from "../components/Switcher";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const Layout = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          <Link to={"/"}>Home</Link>,
          <Link to={"/about"}>About</Link>,
          "Send email",
          "Drafts",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="bg-[#FFF] dark:bg-[#0b091a] dark:text-[#d9d5fa]">
      <header>
        <div className="px-[20px] py-[15px] flex justify-between items-center border-b-[2px] text-[grey]">
          <div className="md:hidden">
            <Search />
          </div>
          <Switcher />
          <div className="hidden md:block">
            <div style={{ display: "flex", alignItems: "center" }}>
              <Search />
              <div>
                {["left"].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>
                      <Menu />
                    </Button>
                    <Drawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                    >
                      {list(anchor)}
                    </Drawer>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <Local />
            &nbsp; &nbsp; &nbsp;
            <Account />
          </div>
        </div>
        <ul className="md:hidden dark:bg-[#0b091a] dark:text-[#d9d5fa] flex justify-between items-center px-[25%] text-[#616161] py-[15px]">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>Tables</li>
          <li>Chairs</li>
          <li>Crockery</li>
          <li>Tableware</li>
          <li>Cutlery</li>
        </ul>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
