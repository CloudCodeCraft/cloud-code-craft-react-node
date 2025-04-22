import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Link } from "react-router";
import { useState } from "react";

function MediumNavbar() {
  return (
    <AppBar
      position="static"
      sx={{ display: { xs: "none", sm: "none", md: "block" } }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to={"/"}>Cloud Code Craft</Link>
        </Typography>

        <Box sx={{ justifyContent: "space-between" }}>
          <Link to={"/jobExperience"}>
            <Typography variant="h6" component="span" sx={{ mr: 3 }}>
              Experience
            </Typography>
          </Link>
          <Link to={"/blog"}>
            <Typography variant="h6" component="span" sx={{ mr: 3 }}>
              Blog
            </Typography>
          </Link>
          <Link to={"/jobExperience"}>
            <Typography variant="h6" component="span" sx={{ mr: 3 }}>
              TODO
            </Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

function SmallNavbar() {
  const [drawerToggle, setDrawerToggle] = useState(false);
  return (
    <AppBar
      position="static"
      sx={{ display: { xs: "block", sm: "block", md: "none" } }}
    >
      <Toolbar sx={{}}>
        <IconButton
          size="large"
          edge="start"
          aria-label="menu"
          sx={{}}
          onClick={() => setDrawerToggle(true)}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          variant="temporary"
          open={drawerToggle}
          onClose={() => setDrawerToggle(false)}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            "& .MuiDrawer-paper": { boxSizing: "border-box" },
          }}
        >
          <List>
            <ListItem>
              <Link
                to={"/jobExperience"}
                onClick={() => setDrawerToggle(false)}
              >
                <Typography variant="h6" component="span" sx={{ mr: 3 }}>
                  Experience
                </Typography>
              </Link>
            </ListItem>

            <ListItem>
              <Link to={"/blog"} onClick={() => setDrawerToggle(false)}>
                <Typography variant="h6" component="span" sx={{ mr: 3 }}>
                  Blog
                </Typography>
              </Link>
            </ListItem>
          </List>
        </Drawer>
        <Box sx={{ flexGrow: 1 }}>{/* spacer */}</Box>

        <Typography variant="h6" component="div" sx={{}}>
          <Link to={"/"}>Daniel Lee</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default function Navbar() {
  return (
    <>
      <MediumNavbar />
      <SmallNavbar />
    </>
  );
}
