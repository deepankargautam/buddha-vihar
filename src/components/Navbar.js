import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

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

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const menuItems = [
        { text: 'Home', to: '/' },
        { text: 'About', to: '/about' },
        { text: 'Causes', to: '/causes' },
        { text: 'Donate', to: '/donate' },
        { text: 'Blog', to: '/blog' },
        { text: 'Gallery', to: '/gallery' },
        { text: 'Events', to: '/events' },
        { text: 'Contact', to: '/contact' },
    ];

    return (
        <AppBar position="sticky" className={scrolled ? 'navbar scrolled' : 'navbar'} sx={{ backgroundColor: 'blue' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
                    TATHAGAT MAHAVIR FOUNDATION TRUST
                </Typography>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '1rem' }}>
                    {menuItems.map((item) => (
                        <Button key={item.text} color="inherit" component={Link} to={item.to} sx={{ color: 'white' }}>
                            {item.text}
                        </Button>
                    ))}
                </Box>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ display: { xs: 'block', md: 'none' } }}
                    onClick={toggleDrawer(true)}
                >
                    <MenuIcon sx={{ color: 'white' }} />
                </IconButton>
                <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={toggleDrawer(false)}
                >
                    <List>
                        {menuItems.map((item) => (
                            <ListItem button key={item.text} component={Link} to={item.to} onClick={toggleDrawer(false)}>
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
