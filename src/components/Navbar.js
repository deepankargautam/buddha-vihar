import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    // Reset scroll position when location changes
    window.scrollTo(0, 0);
  }, [location]);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: "Home", to: "/" },
    { text: "About", to: "/about" },
    { text: "Causes", to: "/causes" },
    { text: "Donate", to: "/donate" },
    // { text: "Blog", to: "/blog" },
    // { text: "Gallery", to: "/gallery" },
    { text: "Events", to: "/events" },
    { text: "Contact", to: "/contact" },
  ];

  return (
    <AppBar
      position="sticky"
      className={scrolled ? "navbar scrolled" : "navbar"}
      sx={{ backgroundColor: "blue" }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component={Link} // Make TMFT a link to "/"
          to="/"
          sx={{ flexGrow: 1, color: "white", textDecoration: "none" }} // Added textDecoration: "none" to remove underline
        >
          TMFT
        </Typography>
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: "1rem" }}>
          {menuItems.map((item) => (
            <Button
              key={item.text}
              color="inherit"
              component={Link}
              to={item.to}
              sx={{ color: "white" }}
              onClick={() => {
                setDrawerOpen(false); // Close drawer on menu item click
              }}
            >
              {item.text}
            </Button>
          ))}
        </Box>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon sx={{ color: "white" }} />
        </IconButton>
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.text}
                component={Link}
                to={item.to}
                onClick={() => {
                  setDrawerOpen(false); // Close drawer on menu item click
                }}
              >
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
