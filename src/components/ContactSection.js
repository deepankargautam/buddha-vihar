import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { styled } from "@mui/system";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
const ContactCard = styled(Card)({
  textAlign: "center",
  padding: "20px",
  marginBottom: "20px",
});

const ContactSection = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom align="center">
        CONTACT
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <ContactCard sx={{ boxShadow: "0 0 30px rgba(214, 215, 216, 0.6)" }}>
            <CardContent>
              <LocationOnIcon className="info-icon" />
              <Typography variant="h6" gutterBottom>
                Our Address
              </Typography>
              <Typography sx={{ color: " #b80000" }} variant="body1">
                Ratanmai Dilippur Pratapgarh Uttar Pradesh 230001 India
              </Typography>
            </CardContent>
          </ContactCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <ContactCard sx={{ boxShadow: "0 0 30px rgba(214, 215, 216, 0.6)" }}>
            <CardContent>
              <EmailIcon className="info-icon" />
              <Typography variant="h6" gutterBottom>
                Email Us
              </Typography>
              <Typography sx={{ color: " #b80000" }} variant="body1">
                barampatibuddhavihar@gmail.com
              </Typography>
            </CardContent>
          </ContactCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <ContactCard sx={{ boxShadow: "0 0 30px rgba(214, 215, 216, 0.6)" }}>
            <CardContent>
              <CallIcon className="info-icon" />
              <Typography variant="h6" gutterBottom>
                Call Us
              </Typography>
              <Typography sx={{ color: " #b80000" }} variant="body1">
                +91 7570877174
              </Typography>
            </CardContent>
          </ContactCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.5697320863394!2d82.0526689!3d25.872226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a9900243f3073%3A0xcd42776f187bd04b!2sBarampati%20Buddha%20Vihar%20Ratanmai!5e0!3m2!1sen!2sin!4v1623939483742!5m2!1sen!2sin"
            width="100%"
            height="400px"
            style={{ border: 0 }}
            loading="lazy"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box component="form">
            <TextField
              fullWidth
              label="Your Name"
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Your Email"
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Phone"
              margin="normal"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Message"
              margin="normal"
              variant="outlined"
              multiline
              rows={4}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ mt: 2, marginBottom: "15px" }}
            >
              Send Message
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactSection;
