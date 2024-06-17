import React from "react";
import { Container, Typography, Box, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" gutterBottom>
          For inquiries or assistance, please contact:
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>B.R Gautam</strong>
          <br />
          Phone: +91 7570877174
          <br />
          Email: barampatibuddhavihaar@gmail.com
          <br />
          Address: Ratanmai Dileeppur, Pratapgarh 230001, Uttar Pradesh, India
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Yashwant Gautam</strong>
          <br />
          Phone: +91 9918600641
          <br />
          Address: Ratanmai Dileeppur, Pratapgarh 230001, Uttar Pradesh, India
        </Typography>

        {/* Google Map Embed */}
        <Box
          mt={4}
          mb={2}
          sx={{
            position: "relative",
            height: 400,
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.5697320863394!2d81.93670001498173!3d25.924716983545326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399aea3d1b7e580b%3A0x4c5b27e337a3cf47!2sBuddha%20Vihar%2C%20Pratapgarh%2C%20Uttar%20Pradesh%20230001!5e0!3m2!1sen!2sin!4v1623939483742!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          />
        </Box>

        {/* Contact Form */}
        <form noValidate autoComplete="off">
          <TextField fullWidth label="Name" margin="normal" />
          <TextField fullWidth label="Email" margin="normal" />
          <TextField
            fullWidth
            label="Message"
            margin="normal"
            multiline
            rows={4}
          />
          <Button variant="contained" color="primary" type="submit">
            Send
          </Button>
        </form>
      </Box>
      <Box sx={{ mt: 8, textAlign: "center", bgcolor: "#f9f9f9", py: 4 }}>
        <Typography variant="h5" gutterBottom>
          Helping the Homeless, Hungry, and Hurting Children
        </Typography>
        <Typography variant="body1" gutterBottom>
          "Together, we can make a difference in the lives of those in need."
          <br />
          Your donation empowers us to create a brighter future for all.
        </Typography>
        <Button
          component={Link}
          to="/donate"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Donate Now
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
