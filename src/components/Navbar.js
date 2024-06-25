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
const TopInfoBar = () => {
  return (
    <AppBar
      position="sticky"
      // className={scrolled ? "navbar scrolled" : "navbar"}
      sx={{ backgroundColor: "red" }}
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
      </Toolbar>
    </AppBar>
  );
};

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
    <>
      {/* <TopInfoBar /> */}
      <AppBar
        position="sticky"
        className={scrolled ? "navbar scrolled" : "navbar"}
        sx={{ backgroundColor: "blue" }}
      >
        <div
          style={{
            height: "auto", // Allow the height to adjust based on content
            minHeight: "30px",
            width: "100%",
            background: "orange", // Linear gradient can be re-added if needed
            backdropFilter: "blur(10px)", // Blur effect
            opacity: 0.9, // Semi-transparent
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 10px", // Reduced padding for better spacing
            color: "#fff", // White text color for better contrast
            flexWrap: "wrap", // Allow content to wrap if needed
            overflow: "hidden", // Prevent overflow
            boxSizing: "border-box",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center", flex: "1 1 50%" }}
          >
            EN{" "}
            <i className="icofont-simple-down" style={{ margin: "0 5px" }}></i>|
            <span style={{ marginLeft: "10px" }}>
              We only have what we give.{" "}
              <a
                href="/donate"
                style={{ color: "#fff", textDecoration: "underline" }}
              >
                Donate Now
              </a>
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              flex: "1 1 50%",
              justifyContent: "flex-end",
            }}
          >
            <i className="icofont-envelope" style={{ marginRight: "5px" }}></i>
            <a
              className="mailicon"
              href="mailto:barampatibuddhavihaar@gmail.com"
              style={{
                color: "#fff",
                textDecoration: "none",
                marginRight: "10px",
              }}
            >
              barampatibuddhavihaar@gmail.com
            </a>
            |
            <i className="icofont-phone" style={{ margin: "0 5px 0 10px" }}></i>{" "}
            +91 7570877174 |
            <a href="#" className="twitter" style={{ margin: "0 5px" }}>
              <i className="icofont-twitter"></i>
            </a>
            <a href="#" className="facebook" style={{ margin: "0 5px" }}>
              <i className="icofont-facebook"></i>
            </a>
            <a href="#" className="instagram" style={{ margin: "0 5px" }}>
              <i className="icofont-instagram"></i>
            </a>
            <a href="#" className="skype" style={{ margin: "0 5px" }}>
              <i className="icofont-skype"></i>
            </a>
            <a href="#" className="linkedin" style={{ margin: "0 5px" }}>
              <i className="icofont-linkedin"></i>
            </a>
          </div>
        </div>

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
    </>
  );
};

export default Navbar;
