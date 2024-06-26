// src/App.js
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Routes, Route, useLocation } from "react-router-dom";
import theme from "./theme";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Causes from "./components/Causes";
import GallaryPage from "./components/GallaryPage";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Donate from "./components/Donate";
import Loader from "./components/Loader";

const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    // Start loading on location change
    handleStart();

    // Stop loading after a delay to simulate page load
    const timeoutId = setTimeout(handleComplete, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [location]);

  return (
    <ThemeProvider theme={theme}>
      <Navbar setLoading={setLoading} />
      {loading && <Loader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/causes" element={<Causes />} />
        <Route path="/gallery" element={<GallaryPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
