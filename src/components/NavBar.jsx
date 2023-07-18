import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

const NavBar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const history = useNavigate(); // Use useHistory instead of useNavigate

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavigation = (item) => {
    history(`/${item.toLowerCase()}`);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListButton
              sx={{ textAlign: "center" }}
              onClick={() => handleNavigation(item)}
            >
              <ListItemText primary={item} />
            </ListButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        elevation={0}
        sx={{ backgroundColor: "white", height: "90px" }}
      >
        <Toolbar sx={{ mt: "10px" }}>
          <IcoButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IcoButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block", color: "#000000" },
            }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <HoverButton
                key={item}
                sx={{
                  color: "#2a2929",
                  mr: "45px",
                  width: "100px",
                  fontWeight: "bold",
                }}
                onClick={() => handleNavigation(item)}
              >
                {item}
              </HoverButton>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

const HoverButton = styled(Button)`
  &:hover {
    background-color: #f71971 !important;
    border-radius: 1px 20px;
    height: 46px;
  }
`;

const ListButton = styled(ListItemButton)`
  &:hover {
    background-color: #f71971 !important;
    border-radius: 0px 20px;
  }
`;
const IcoButton = styled(IconButton)`
  margin-left: 15px;
  margin-left: 25px;
  width: 55px;
  height: 55px;
  border-radius: 5px 20px;

  &:hover {
    background-color: #f71971 !important;
    border-radius: 0px 20px;
  }
`;

export default NavBar;
