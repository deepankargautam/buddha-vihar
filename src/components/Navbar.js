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
// import BuddhaImage from "./path/to/buddha.png"; // Import your Buddha image
import "./Navbar.css";

const Navbar = ({ setLoading }) => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 400;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const handleLinkClick = () => {
    setLoading(true);
  };

  useEffect(() => {
    // Reset scroll position when location changes
    window.scrollTo(0, 0);
    setLoading(false);
  }, [location, setLoading]);

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
    { text: "Gallery", to: "/gallery" },
    { text: "Events", to: "/events" },
    { text: "Contact", to: "/contact" },
  ];

  return (
    <>
      <AppBar
        className={scrolled ? "navbar scrolled" : "navbar"}
        sx={{ backgroundColor: "transparent" }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ flexGrow: 1, color: "red", textDecoration: "none" }}
          >
            <img
              src="output-onlinepngtools.png"
              alt="Buddha"
              style={{ height: 70, width: 120 }}
            />
          </Typography>
          {/* Centered Buddha Image */}
          <Box
            sx={{ display: "flex", alignItems: "center", marginRight: "120px" }}
          >
            <div className="sun">
              <div className="center"></div>
              <div className="ray r-1"></div>
              <div className="ray r-2"></div>
              <div className="ray r-3"></div>
              <div className="ray r-4"></div>
              <div className="ray r-5"></div>
              <div className="ray r-6"></div>
              <div className="ray r-7"></div>
              <div className="ray r-8"></div>
            </div>
            <Box className="buddha">
              <img
                src="/b-1.png"
                alt="Buddha"
                style={{ height: 50, width: 50 }}
              />
            </Box>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: "1rem" }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                component={Link}
                to={item.to}
                // sx={{ color: "white" }}
                onClick={handleLinkClick}
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
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
          >
            <List>
              {menuItems.map((item) => (
                <ListItem
                  button
                  key={item.text}
                  component={Link}
                  to={item.to}
                  onClick={handleLinkClick}
                >
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
