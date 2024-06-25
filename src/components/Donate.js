import React, { useEffect, useState } from "react";
import axios from "axios"; // Use axios for HTTP requests
import {
  Container,
  Typography,
  Box,
  Paper,
  Link,
  Button,
  Divider,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@emotion/react";

const Donate = () => {
  const [language, setLanguage] = useState("english");
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const getContent = () => {
    switch (language) {
      case "hindi":
        return {
          title: "तथागत महाविहार फाउंडेशन ट्रस्ट को दान करें",
          dearMembers: "प्रिय सदस्यों,",
          importance:
            "हम उन सामाजिक स्थलों में रहने का गर्व महसूस करते हैं जहां धार्मिक स्थलों का महत्व प्रमुख है, और ये स्थल आम जनता के आध्यात्मिक और सामाजिक विकास को सुनिश्चित करने में महत्वपूर्ण भूमिका निभाते हैं।",
          initiative:
            "इस संदर्भ में, हमारे संगठन तथागत महाविहार फाउंडेशन ट्रस्ट के तहत 'निरामंधिन बरम्पति बुद्ध विहार' की स्थापना के लिए आपका वित्तीय सहयोग आवश्यक है, जो एक महत्वपूर्ण पहल के रूप में है। इस परियोजना के माध्यम से, हम उन लोगों की सहायता करने का उद्देश्य रखते हैं जो धार्मिक और आध्यात्मिक दृष्टिकोण से समृद्धि की ओर प्रयासरत हैं।",
          request:
            "हम इस महत्वपूर्ण कार्य के लिए आपका सहयोग अनुरोध करते हैं। आपके सहयोग के साथ, हम इस महत्वपूर्ण पहल को सफल बना सकते हैं और हमारे समाज को समृद्धि और सामाजिक सुधार की ओर और भी अग्रसर कर सकते हैं।",
          bankDetails:
            "वित्तीय सहायता के लिए कृपया निम्नलिखित विवरण का प्रयोग करें:",
          bankName: "बैंक का नाम: बैरोडा यूपी बैंक",
          accountName: "खाता धारक का नाम: तथागत महाविहार फाउंडेशन ट्रस्ट",
          accountNo: "खाता संख्या: 53640100023052",
          ifscCode: "IFSC कोड: BARB0BUPGBX",
          address: "पता: रतनमई दिलीपपुर प्रतापगढ़ यूपी 230127",
          shareMessage:
            "कृपया हमारे संगठन का संदेश अपने दोस्तों और परिवार के सदस्यों के साथ साझा करें और हमें इस महत्वपूर्ण काम को साकार करने में सबसे उच्च समर्थन प्रदान करें।",
          support:
            "हम आपके समर्थन की उम्मीद करते हैं और आपका धन्यवाद करते हैं कि आप हमारे समाज को सुधारने के इस महत्वपूर्ण काम में हमारे साथ जुड़ रहे हैं।",
          thanks: "धन्यवाद!",
          president: "बीआर गौतम (प्रेसिडेंट)",
          contactNo: "संपर्क नंबर:",
          trust: "[तथागत महाविहार फाउंडेशन ट्रस्ट]",
        };
      case "pali":
      default:
        return {
          title: "Donate to Tathagat Mahavihar Foundation Trust",
          dearMembers: "Dear Members,",
          importance:
            "We take pride in living in a society where the importance of religious places is paramount, and these places play a vital role in ensuring the spiritual and social development of our society.",
          initiative:
            'In this context, we require your financial support for the establishment of the "Niramandhin Barampati Buddha Vihar" under the organization "Tathagat Mahavihar Foundation Trust" as part of a significant initiative. With this project, we aim to assist those who strive for prosperity from a religious and spiritual perspective.',
          request:
            "We request your support for this important cause. With your support, we can make this significant initiative successful and further advance our society towards prosperity and social improvement.",
          bankDetails:
            "Please use the following details for financial support:",
          bankName: "Bank Name: Baroda U.P. Bank",
          accountName: "Account Name: TATHAGAT MAHAVIHAR FOUNDATION TRUST",
          accountNo: "Account No: 53640100023052",
          ifscCode: "IFSC Code: BARB0BUPGBX",
          address: "Address: RATANMAI DILIPPUR PRATAPGARH UP 230127",
          shareMessage:
            "Please share our organization's message with your friends and family members and provide the highest support to us in realizing this important work.",
          support:
            "We look forward to your support and are grateful to you for joining us in this important work of improving our society.",
          thanks: "Thank you!",
          president: "B.R Gautam (President)",
          contactNo: "Contact No:",
          trust: "[TATHAGAT MAHAVIHAR FOUNDATION TRUST]",
        };
    }
  };
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    try {
      const response = await axios.get("http://localhost:5000/donations");
      setDonations(response.data);
    } catch (error) {
      console.error("Error fetching donations:", error);
    }
  };

  const addDonation = async () => {
    try {
      const newDonation = {
        donorName: "New Donor",
        amount: 50000,
        cause: "Build the Barampati Buddha Vihaar",
      };
      const response = await axios.post(
        "http://localhost:5000/donations",
        newDonation,
      );
      setDonations([...donations, response.data]); // Update state with new donation
    } catch (error) {
      console.error("Error adding donation:", error);
    }
  };

  return (
    <>
      <div
        className="home-container"
        style={{
          backgroundImage: "url(/buddha-1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "30vh",
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
              Donate Now
            </Typography>
            <Typography variant="body1" gutterBottom style={{ color: "#fff" }}>
              {/* This trust/charity is a charitable organization that operates
              above caste, class, community, gender, and politics. */}
            </Typography>
          </Container>
        </Box>
      </div>
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" gutterBottom align="center" color="primary">
            {getContent().title}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
            <Button
              onClick={() => handleLanguageChange("english")}
              color="primary"
              variant={language === "english" ? "contained" : "outlined"}
              sx={{ mr: 1 }}
            >
              English
            </Button>
            <Button
              onClick={() => handleLanguageChange("hindi")}
              color="primary"
              variant={language === "hindi" ? "contained" : "outlined"}
              sx={{ mr: 1 }}
            >
              हिंदी
            </Button>
            {/* <Button onClick={() => handleLanguageChange('pali')} color="primary" variant={language === 'pali' ? 'contained' : 'outlined'}>पाली लिपि</Button> */}
          </Box>
          <Paper elevation={3} sx={{ p: 3, mt: 3, backgroundColor: "#f9f9f9" }}>
            <Typography variant="body1" paragraph color="textSecondary">
              {getContent().dearMembers}
            </Typography>
            <Typography variant="body1" paragraph color="textSecondary">
              {getContent().importance}
            </Typography>
            <Typography variant="body1" paragraph color="textSecondary">
              {getContent().initiative}
            </Typography>
            <Typography variant="body1" paragraph color="textSecondary">
              {getContent().request}
            </Typography>
            <Typography variant="body1" paragraph color="textSecondary">
              {getContent().bankDetails}
            </Typography>
            <Box
              sx={{
                p: 2,
                border: "1px solid #ccc",
                borderRadius: 2,
                mb: 2,
                backgroundColor: "#e0f7fa",
              }}
            >
              <Typography variant="body1" paragraph>
                {getContent().bankName}
              </Typography>
              <Typography variant="body1" paragraph>
                {getContent().accountName}
              </Typography>
              <Typography variant="body1" paragraph>
                {getContent().accountNo}
              </Typography>
              <Typography variant="body1" paragraph>
                {getContent().ifscCode}
              </Typography>
              <Typography variant="body1" paragraph>
                {getContent().address}
              </Typography>
            </Box>
            <Typography variant="body1" paragraph color="textSecondary">
              {getContent().shareMessage}
            </Typography>
            <Typography variant="body1" paragraph color="textSecondary">
              {getContent().support}
            </Typography>
            <Typography variant="body1" paragraph color="textSecondary">
              {getContent().thanks}
              <br />
              <strong>{getContent().president}</strong>
              <br />
              {getContent().contactNo}:{" "}
              <Link href="tel:7570877174">7570877174</Link>
              <br />
              <strong>{getContent().trust}</strong>
            </Typography>
          </Paper>
        </Box>
      </Container>
      <div
        className="donations-section"
        style={{ padding: isSmallScreen ? "1rem" : "2rem" }}
      >
        <Container>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            className="donations-title"
          >
            LATEST DONATIONS
          </Typography>
          {/* <Typography variant="body1" component="p" className="donations-subtitle" sx={{ marginBottom: "30px" }}>
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                    </Typography> */}
          <Grid container spacing={4} className="donations-grid">
            <Grid item xs={12} md={4}>
              <div className="card">
                <div className="card2">
                  <img
                    src={"donar-1.jpeg"}
                    alt="Donor"
                    className="donation-image"
                  />
                  <div className="donation-content">
                    <Typography
                      variant="h6"
                      component="h3"
                      className="donor-name"
                    >
                      B. R. GAUTAM
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      className="donation-amount"
                    >
                      Donated 100000 <Divider /> 8 BISWA LAND to{" "}
                      <span className="donation-cause">
                        Build the Barampati Buddha Vihaar
                      </span>
                    </Typography>
                  </div>
                </div>
              </div>
              {/* <div
                className="donation-card"
                style={{ boxShadow: "0px 3px 66px -24px rgba(0, 0, 0, 0.2)" }}
              >
                <img
                  src={"donar-1.jpeg"}
                  alt="Donor"
                  className="donation-image"
                />
                <div className="donation-content">
                  <Typography
                    variant="h6"
                    component="h3"
                    className="donor-name"
                  >
                    B. R. GAUTAM
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="donation-amount"
                  >
                    Donated 100000 <Divider /> 8 BISWA LAND to{" "}
                    <span className="donation-cause">
                      Build the Barampati Buddha Vihaar
                    </span>
                  </Typography>
                </div>
              </div> */}
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="card">
                <div className="card2">
                  <img
                    src={"donar-2.jpeg"}
                    alt="Donor"
                    className="donation-image"
                  />
                  <div className="donation-content">
                    <Typography
                      variant="h6"
                      component="h3"
                      className="donor-name"
                    >
                      Rampatti Devi
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      className="donation-amount"
                    >
                      Donated 50000 <Divider />
                      To{" "}
                      <span className="donation-cause">
                        Build the Barampati Buddha Vihaar
                      </span>
                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="card">
                <div className="card2">
                  <img
                    src={"donar-3.jpeg"}
                    alt="Donor"
                    className="donation-image"
                  />
                  <div className="donation-content">
                    <Typography
                      variant="h6"
                      component="h3"
                      className="donor-name"
                    >
                      Yashwant Kumar Gautam
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      className="donation-amount"
                    >
                      Donated 100000 <Divider /> To{" "}
                      <span className="donation-cause">
                        Build the Barampati Buddha Vihaar
                      </span>
                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Donate;
