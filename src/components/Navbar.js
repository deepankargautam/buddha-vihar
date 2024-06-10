import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        document.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <AppBar position="sticky" className={scrolled ? 'navbar scrolled' : 'navbar'}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:"blue" }}>
                    TATHAGAT MAHAVIR FOUNDATION TRUST
                </Typography>
                <Box sx={{ display: 'flex', gap: '1rem' }}>
                    <Button color="inherit" component={Link} to="/">
                        Home
                    </Button>
                    <Button color="inherit" component={Link} to="/about">
                        About
                    </Button>
                    <Button color="inherit" component={Link} to="/causes">
                        Causes
                    </Button>
                    <Button color="inherit" component={Link} to="/donate">
                        Donate
                    </Button>
                    <Button color="inherit" component={Link} to="/blog">
                        Blog
                    </Button>
                    <Button color="inherit" component={Link} to="/gallery">
                        Gallery
                    </Button>
                    <Button color="inherit" component={Link} to="/events">
                        Events
                    </Button>
                    <Button color="inherit" component={Link} to="/contact">
                        Contact
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
