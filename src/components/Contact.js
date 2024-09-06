import React from "react";
import { Container, Typography, Box, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import DonateSection from "./DonateSection";
const Contact = () => {
  return (
    <>
      <div
        className="home-container"
        style={{
          backgroundImage: "url(/buddha-1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          className="home-overlay"
          style={{
            //  backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "2rem",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <Container>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              className="home-title"
              style={{ color: "#fff", fontWeight: "bold" }}
            >
              Contact Us
            </Typography>
            <Typography variant="body1" gutterBottom style={{ color: "#fff" }}>
              {/* This trust/charity is a charitable organization that operates
              above caste, class, community, gender, and politics. */}
            </Typography>
          </Container>
        </Box>
      </div>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.5697320863394!2d82.0526689!3d25.872226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a9900243f3073%3A0xcd42776f187bd04b!2sBarampati%20Buddha%20Vihar%20Ratanmai!5e0!3m2!1sen!2sin!4v1623939483742!5m2!1sen!2sin"
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
      </Container>
      <DonateSection />
    </>
  );
};

export default Contact;
