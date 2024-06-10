import React from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';

const Contact = () => {
    return (
        <Container>
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Contact Us
                </Typography>
                <form noValidate autoComplete="off">
                    <TextField fullWidth label="Name" margin="normal" />
                    <TextField fullWidth label="Email" margin="normal" />
                    <TextField fullWidth label="Message" margin="normal" multiline rows={4} />
                    <Button variant="contained" color="primary" type="submit">
                        Send
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default Contact;
