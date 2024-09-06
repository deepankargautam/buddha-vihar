import React from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import "./Home.css";
import "./BuddhaAnimation.css"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import DonateSection from "./DonateSection";
import ContactSection from "./ContactSection";
import ImageGallary from "./ImageGallary";

const CarouselComponent = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Carousel
      showArrows={true}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={5000} // Change interval as needed
      stopOnHover={true}
      transitionTime={500} // Change transition time as needed
    >
      <div>
        <img
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: isSmallScreen ? "70vh" : "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          src="/buddha-1.jpg"
          alt="Buddha"
        />
      </div>
      <div>
        <img
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: isSmallScreen ? "70vh" : "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          src="/budhha-2.jpg"
          alt="Image 2"
        />
      </div>
      <div>
        <img
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: isSmallScreen ? "70vh" : "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          src="/budhha-3.jpg"
          alt="Image 3"
        />
      </div>
    </Carousel>
  );
};
const Home = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box
        className="home-container"
        style={{
          height: isSmallScreen ? "70vh" : "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative", // Ensure this container can hold absolute positioned elements
        }}
      >
        <CarouselComponent /> {/* Replace background image with Carousel */}
        <Box
          className="home-overlay"
          style={{
            padding: "2rem",
            borderRadius: "8px",
            textAlign: "center",
            width: isSmallScreen ? "100%" : "auto",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
          }}
        >
          <Container>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              className="home-title"
              style={{
                // color: "#fff",
                fontWeight: "bold",
                fontSize: isSmallScreen ? "2rem" : "3rem",
                background:
                  "linear-gradient(to right, #ff4b1f, #ff9068, #ffc837, #f7ff00, #db36a4, #12c2e9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Help Build the Barampati Buddha Vihaar
            </Typography>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              className="home-subtitle"
              // style={{ color: "#ddd", marginBottom: "2rem" }}
              style={{
                color: "#ddd",
                marginBottom: "2rem",
                // background: "linear-gradient(to right, #ff4b1f, #1fddff)",
                // WebkitBackgroundClip: "text",
                // WebkitTextFillColor: "transparent",
                background: "linear-gradient(to right, #00c6ff, #0072ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Your Contribution Can Make a Difference - Support the Tathagat
              Mahavihar Foundation Trust
            </Typography>
            <Button
              component={Link}
              to="/donate"
              className="home-button"
              sx={{
                // backgroundColor: "blue",
                // border: "1px solid rgba(255, 255, 255, 0.4) !important",
                border: "3px solid white !important",
                opacity: "0.887956",
                transform: "translateY(0)",
                transition: "transform 0.3s ease, background-color 0.3s ease",
                color: "#fff",
                // borderRadius: 0,
                borderRadius: 30,
                borderWidth: "1px",
                boxShadow: "0 5px 20px -5px rgba(0, 0, 0, 0.5)",
                fontWeight: "400",
                padding: "0.375rem 0.75rem",
                "&:hover": {
                  transform: "translateY(-5px)",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                },
              }}
            >
              Donate Now
            </Button>
          </Container>
        </Box>
      </Box>

      <div
        className="info-section"
        style={{ padding: isSmallScreen ? "1rem" : "2rem" }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <div className="info-card">
              <FavoriteIcon className="info-icon" />
              <Typography variant="h6" component="h3" className="info-title">
                Make a Donation
              </Typography>
              <Typography
                variant="body1"
                component="p"
                className="info-description"
              >
                Your generosity can help build and maintain the Barampati Buddha
                Vihaar, providing a place for meditation, learning, and
                community gatherings.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="info-card">
              <VolunteerActivismIcon className="info-icon" />
              <Typography variant="h6" component="h3" className="info-title">
                Become a Volunteer
              </Typography>
              <Typography
                variant="body1"
                component="p"
                className="info-description"
              >
                Join us in various activities such as organizing events,
                maintaining the Vihaar, and spreading the teachings of the
                Buddha.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="info-card">
              <AttachMoneyIcon className="info-icon" />
              <Typography variant="h6" component="h3" className="info-title">
                Sponsorship
              </Typography>
              <Typography
                variant="body1"
                component="p"
                className="info-description"
              >
                Support our initiatives by sponsoring meditation retreats,
                educational programs, and cultural events that promote peace and
                mindfulness.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>

      <div
        className="causes-section"
        style={{ padding: isSmallScreen ? "1rem" : "2rem" }}
      >
        <Container>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            className="causes-title"
          >
            OUR CAUSES
          </Typography>
          <Typography
            variant="body1"
            component="p"
            className="causes-subtitle"
            sx={{ marginBottom: "30px" }}
          >
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </Typography>
          <Grid container spacing={4} className="causes-grid">
            <Grid item xs={12} md={4}>
              <div className="cause-card">
                <img src="/cause-1.jpg" alt="Cause" className="cause-image" />
                <div className="cause-content">
                  <Typography
                    variant="h6"
                    component="h3"
                    className="cause-title"
                  >
                    Social Welfare
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="cause-description"
                  >
                    Conducting all social activities for the welfare of humanity
                    and the spread of Buddhism.
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="cause-card">
                <img src="/cause-2.jpg" alt="Cause" className="cause-image" />
                <div className="cause-content">
                  <Typography
                    variant="h6"
                    component="h3"
                    className="cause-title"
                  >
                    Support for Needy Children
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="cause-description"
                  >
                    Arranging education, training, marriages, etc., for helpless
                    boys and girls.
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="cause-card">
                <img src="/cause-3.jpg" alt="Cause" className="cause-image" />
                <div className="cause-content">
                  <Typography
                    variant="h6"
                    component="h3"
                    className="cause-title"
                  >
                    Cultural Festivals
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="cause-description"
                  >
                    Organizing cultural festivals, commemorations of great
                    personalities, and other events for the promotion of
                    Buddhism.
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>

      <div
        className="Buddhacontainer"
        style={{ padding: isSmallScreen ? "1rem" : "2rem" }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={12}>
            <div className="one-div-container">
              <div className="one-div">
                <img src="b-1.png" alt="Centered Image" />
              </div>
            </div>
          </Grid>
          {/* <Grid item xs={12} md={4}>

          </Grid>
          <Grid item xs={12} md={4}>

          </Grid> */}
        </Grid>
      </div>

      {/* <div
        className="donations-section"
        style={{ padding: isSmallScreen ? "1rem" : "2rem" }}
      >
        <Container>
          <Grid container spacing={4}>
            <div className="one-div-container">
              <div className="one-div">
                <img src="b-1.png" alt="Centered Image" />
              </div>
            </div>
          </Grid>
        </Container>
      </div> */}
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
      <div
        className="events-section"
        style={{ padding: isSmallScreen ? "1rem" : "2rem" }}
      >
        <Container>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            className="events-title"
          >
            OUR LATEST EVENTS
          </Typography>
          <Grid container spacing={4} className="events-grid">
            <Grid item xs={12} md={4}>
              <div className="event-card">
                <img
                  src={"/event-1.jpeg"}
                  alt="Event"
                  className="event-image"
                />
                <div className="event-content">
                  <Typography
                    variant="caption"
                    component="p"
                    className="event-date"
                  >
                    July. 3, 2023
                  </Typography>
                  <Typography
                    variant="h6"
                    component="h3"
                    className="event-title"
                  >
                    बरमपति बुद्ध विहार भूमि पूजन
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="event-time"
                  >
                    10:30AM-03:30PM Ratanmai Pratapgarh
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="event-description"
                  >
                    Join us for the auspicious ground-breaking ceremony of the
                    Barampati Buddha Vihaar.
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="event-card">
                <img src={"/event-3.PNG"} alt="Event" className="event-image" />
                <div className="event-content">
                  <Typography
                    variant="caption"
                    component="p"
                    className="event-date"
                  >
                    July. 3, 2023
                  </Typography>
                  <Typography
                    variant="h6"
                    component="h3"
                    className="event-title"
                  >
                    शिला लेख अनावरण
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="event-time"
                  >
                    10:30AM-03:30PM Ratanmai Pratapgarh
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="event-description"
                  >
                    Witness the unveiling of the commemorative stone plaque.
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="event-card">
                <img src={"/event-2.jpg"} alt="Event" className="event-image" />
                <div className="event-content">
                  <Typography
                    variant="caption"
                    component="p"
                    className="event-date"
                  >
                    July. 3, 2023
                  </Typography>
                  <Typography
                    variant="h6"
                    component="h3"
                    className="event-title"
                  >
                    भिक्षु संघ देशना व दीक्षा
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="event-time"
                  >
                    10:30AM-03:30PM Ratanmai Pratapgarh
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="event-description"
                  >
                    Participate in the monk's teachings and the ordination
                    ceremony.
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>

      <div
        className="volunteer-section"
        style={{ padding: isSmallScreen ? "1rem" : "2rem" }}
      >
        <Container>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            className="volunteer-title"
          >
            Our Volunteers
          </Typography>
          <Grid container spacing={4} className="volunteer-grid">
            <Grid item xs={12} md={4}>
              <div className="volunteer-card">
                <img
                  src="/Volunteer.jpeg"
                  alt="Volunteer"
                  className="volunteer-image"
                />
                <div className="volunteer-content">
                  <Typography
                    variant="h6"
                    component="h3"
                    className="volunteer-name"
                  >
                    B. R. Gautam
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="volunteer-role"
                  >
                    President
                  </Typography>
                  <div className="volunteer-social">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="volunteer-card">
                <img
                  src="/Volunteer-2.jpeg"
                  alt="Volunteer"
                  className="volunteer-image"
                />
                <div className="volunteer-content">
                  <Typography
                    variant="h6"
                    component="h3"
                    className="volunteer-name"
                  >
                    Ram Patti
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="volunteer-role"
                  >
                    Volunteer
                  </Typography>
                  <div className="volunteer-social">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className="volunteer-card">
                <img
                  src="/Volunteer-3.jpeg"
                  alt="Volunteer"
                  className="volunteer-image"
                />
                <div className="volunteer-content">
                  <Typography
                    variant="h6"
                    component="h3"
                    className="volunteer-name"
                  >
                    Yashwant Kumar Gautam
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="volunteer-role"
                  >
                    Volunteer
                  </Typography>
                  <div className="volunteer-social">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <DonateSection />
      <ContactSection />
    </>
  );
};

export default Home;
