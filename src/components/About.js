import React from "react";
import { Container, Typography, Box, Grid, Button } from "@mui/material";
import "./About.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      {/* Hero section */}
      <div
        className="home-container"
        style={{
          backgroundImage: "url(/buddha-1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          className="home-overlay"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
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
              About Us
            </Typography>
          </Container>
        </Box>
      </div>

      <Container>
        <Box sx={{ my: 4 }}>
          {/* Mission section */}
          {/* ... */}

          {/* Our Team section */}
          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  boxShadow: 3,
                }}
                alt="Our Mission"
                src="mission.jpg" // Update the path accordingly
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h2" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1" gutterBottom>
                हमारी संस्था का मिशन बौद्ध धर्म के प्रचार-प्रसार, प्रशिक्षण एवं
                शोध संस्थानों, ध्यान केंद्रों, और सांस्कृतिक कार्यक्रमों की
                स्थापना करना है। हम पर्यावरण संरक्षण, अनाथालय, वृद्ध आश्रम,
                निशुल्क अस्पताल, और शैक्षिक संस्थानों की स्थापना, भारतीय संविधान
                की रक्षा, नारी सशक्तिकरण, पाली भाषा के संरक्षण, और समाज की
                जागरूकता हेतु कार्यरत हैं। हमारा उद्देश्य बाबा साहब डॉ. भीमराव
                अंबेडकर जी के सिद्धांतों के माध्यम से समाज में मैत्री, करुणा,
                मुदिता और अपेक्षा स्थापित करना है।
              </Typography>
              <Button variant="contained" color="success" sx={{ mt: 2 }}>
                Donate Now
              </Button>
            </Grid>
          </Grid>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ mt: 8, textAlign: "center" }}
          >
            Our Team
          </Typography>

          {/* Grid for team members */}
          <Grid container spacing={4} justifyContent="center">
            {teamMembers.map((member, index) => (
              <Grid
                item
                xs={6}
                sm={6}
                md={4}
                lg={3}
                key={index}
                sx={{ textAlign: "center" }}
              >
                <div className="team-section">
                  <div className="team-section-info">
                    <div
                      className="team-section-avatar"
                      style={{
                        backgroundImage: `url(${member.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <Typography
                      variant="h6"
                      gutterBottom
                      className="team-section-title"
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="team-section-subtitle"
                    >
                      {member.position}
                      <br />
                      {member.location}
                    </Typography>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>

          {/* Donation call to action */}
          <Box sx={{ mt: 8, textAlign: "center", bgcolor: "#f9f9f9", py: 4 }}>
            <Typography variant="h5" gutterBottom>
              Helping the Homeless, Hungry, and Hurting Children
            </Typography>
            <Typography variant="body1" gutterBottom>
              "Together, we can make a difference in the lives of those in
              need."
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
        </Box>
      </Container>
    </>
  );
};

const teamMembers = [
  {
    name: "B R Gautam",
    position: "मुख्य ट्रस्टी",
    location: "रतनमई, रानीगंज, प्रतापगढ़",
    image: "worker.png", // Update the path accordingly
  },
  {
    name: "बविता कोरी",
    position: "उप ट्रस्टी",
    location: "रतनमई, रानीगंज, प्रतापगढ़",
    image: "worker.png", // Update the path accordingly
  },
  {
    name: "रीना गौतम",
    position: "कोषाध्यक्ष",
    location: "रतनमई, रानीगंज, प्रतापगढ़",
    image: "worker.png", // Update the path accordingly
  },
  {
    name: "उधमसिंह (अश्वजीतभंते)",
    position: "संरक्षक",
    location: "सहोदरपुर, सदर प्रतापगढ़",
    image: "worker.png", // Update the path accordingly
  },
  {
    name: "रामसूरत",
    position: "महामंत्री",
    location: "कंधई, पट्टी, प्रतापगढ़",
    image: "worker.png", // Update the path accordingly
  },
  {
    name: "अशोक कुमार",
    position: "सहसचिव",
    location: "रतनमई, रानीगंज, प्रतापगढ़",
    image: "worker.png", // Update the path accordingly
  },
  {
    name: "कुन्दन कुमार",
    position: "संयुक्तमंत्री",
    location: "बलिपुर. सदर, प्रतापगढ़",
    image: "worker.png", // Update the path accordingly
  },
  {
    name: "मगदूम",
    position: "सह संयुक्तमंत्री",
    location: "रतनमई, रानीगंज, प्रतापगढ़",
    image: "worker.png", // Update the path accordingly
  },
  {
    name: "हरीलाल बौध्दाचार्य",
    position: "प्रचार मंत्री",
    location: "हकीमकापूरा, सदर, प्रतापगढ़",
    image: "worker.png", // Update the path accordingly
  },
  {
    name: "नन्दराव",
    position: "पुस्तकालय मंत्री",
    location: "रतनमई, रानीगंज, प्रतापगढ़",
    image: "worker.png", // Update the path accordingly
  },
  {
    name: "मुनीन्द्र प्रताप भारती",
    position: "विधिक सलाहकार",
    location: "मढरामऊ, अमरगढ़, प्रतापगढ़",
    image: "worker.png", // Update the path accordingly
  },
  {
    name: "विभय कुमार",
    position: "उपविधिक सलाहकार",
    location: "रतनमई, रानीगंज, प्रतापगढ़",
    image: "worker.png", // Update the path accordingly
  },
  // Add more team members as needed
];

export default About;
