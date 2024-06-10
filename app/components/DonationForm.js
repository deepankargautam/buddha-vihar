import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import axios from 'axios';

const DonationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add the logic to send the form data to your server or payment gateway
    try {
      const response = await axios.post('/api/donate', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" gutterBottom>Donate</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            name="amount"
            label="Donation Amount"
            value={formData.amount}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            fullWidth
            name="message"
            label="Message"
            value={formData.message}
            onChange={handleChange}
            margin="normal"
          />
          <Box mt={2}>
            <Button type="submit" variant="contained" color="primary">Donate</Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default DonationForm;
