import React from 'react';
import { Container, Typography, Box, Button, Grid, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import './Home.css';
// import "" from './path-to-your-image/image.png'; // Adjust the path accordingly
// import "" from './path-to-your-image/image.png'; // Adjust the path accordingly

const Home = () => {

    return (
        <>
   <div className="home-container" style={{ backgroundImage: 'url(/buddha-1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box className="home-overlay" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '2rem', borderRadius: '8px', textAlign: 'center' }}>
            <Container>
                <Typography variant="h3" component="h1" gutterBottom className="home-title" style={{ color: '#fff', fontWeight: 'bold' }}>
                    Help Build the Barampati Buddha Vihaar
                </Typography>
                <Typography variant="h6" component="h2" gutterBottom className="home-subtitle" style={{ color: '#ddd', marginBottom: '2rem' }}>
                    Your Contribution Can Make a Difference - Support the Tathagat Mahavir Foundation Trust
                </Typography>
                <Button component={Link} to="/donate" className="home-button" sx={{
                    border: "1px solid rgba(255, 255, 255, 0.4) !important",
                    opacity: "0.887956",
                    transform: "translateY(0)",
                    transition: "transform 0.3s ease, background-color 0.3s ease",
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: "#fff",
                    borderRadius: 0,
                    borderWidth: "1px",
                    boxShadow: "0 5px 20px -5px rgba(0, 0, 0, 0.5)",
                    fontWeight: "400",
                    padding: "0.375rem 0.75rem",
                    '&:hover': {
                        transform: "translateY(-5px)",
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    }
                }}>
                    Donate Now
                </Button>
            </Container>
        </Box>
    </div>

            <div className="info-section">
                <div className="info-card">
                    <FavoriteIcon className="info-icon" />
                    <Typography variant="h6" component="h3" className="info-title">
                        Make Donation
                    </Typography>
                    <Typography variant="body1" component="p" className="info-description">
                        Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                    </Typography>
                </div>
                <div className="info-card">
                    <VolunteerActivismIcon className="info-icon" />
                    <Typography variant="h6" component="h3" className="info-title">
                        Become A Volunteer
                    </Typography>
                    <Typography variant="body1" component="p" className="info-description">
                        Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                    </Typography>
                </div>
                <div className="info-card">
                    <AttachMoneyIcon className="info-icon" />
                    <Typography variant="h6" component="h3" className="info-title">
                        Sponsorship
                    </Typography>
                    <Typography variant="body1" component="p" className="info-description">
                        Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                    </Typography>
                </div>
            </div>
            <div className="causes-section">
                <Container>
                    <Typography variant="h4" component="h2" gutterBottom className="causes-title">
                        OUR CAUSES
                    </Typography>
                    <Typography variant="body1" component="p" className="causes-subtitle" sx={{marginBottom:"30px"}}>
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                    </Typography>
                    <Grid container spacing={4} className="causes-grid">
                        <Grid item xs={12} md={4}>
                            <div className="cause-card">
                                <img src="/cause-1.jpg" alt="Cause" className="cause-image" />
                                <div className="cause-content">
                                    <Typography variant="h6" component="h3" className="cause-title">
                                        Clean water for the urban area
                                    </Typography>
                                    <Typography variant="body2" component="p" className="cause-description">
                                        Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.
                                    </Typography>
                                    <Typography variant="caption" component="p" className="cause-time">
                                        Last donation 1hr ago
                                    </Typography>
                                    <Typography variant="body2" component="p" className="cause-raised">
                                        $12,000 raised of $30,000
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div className="cause-card">
                                <img src="/cause-3.jpg" alt="Cause" className="cause-image" />
                                <div className="cause-content">
                                    <Typography variant="h6" component="h3" className="cause-title">
                                        Clean water for the urban area
                                    </Typography>
                                    <Typography variant="body2" component="p" className="cause-description">
                                        Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.
                                    </Typography>
                                    <Typography variant="caption" component="p" className="cause-time">
                                        Last donation 1hr ago
                                    </Typography>
                                    <Typography variant="body2" component="p" className="cause-raised">
                                        $12,000 raised of $30,000
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div className="cause-card">
                                <img src="/cause-5.jpg" alt="Cause" className="cause-image" />
                                <div className="cause-content">
                                    <Typography variant="h6" component="h3" className="cause-title">
                                        Clean water for the urban area
                                    </Typography>
                                    <Typography variant="body2" component="p" className="cause-description">
                                        Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.
                                    </Typography>
                                    <Typography variant="caption" component="p" className="cause-time">
                                        Last donation 1hr ago
                                    </Typography>
                                    <Typography variant="body2" component="p" className="cause-raised">
                                        $12,000 raised of $30,000
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className="donations-section">
                <Container>
                    <Typography variant="h4" component="h2" gutterBottom className="donations-title">
                        LATEST DONATIONS
                    </Typography>
                    <Typography variant="body1" component="p" className="donations-subtitle" sx={{marginBottom:"30px"}}>
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                    </Typography>
                    <Grid container spacing={4} className="donations-grid">
                        <Grid item xs={12} md={4} >
                            <div className="donation-card"  style={{  boxShadow: "0px 3px 66px -24px rgba(0, 0, 0, 0.2)" }}>
                                <img src={"donar-1.jpeg"} alt="Donor" className="donation-image" />
                                <div className="donation-content">
                                    <Typography variant="h6" component="h3" className="donor-name">
                                       B. R. GAUTAM
                                    </Typography>
                                    {/* <Typography variant="body2" component="p" className="donation-time">
                                        Donated Just now
                                    </Typography> */}
                                    <Typography variant="body2" component="p" className="donation-amount">
                                        Donated 100000  <Divider/> 8 BISWA LAND to <span className="donation-cause">Build the Barampati Buddha Vihaar</span>
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div className="donation-card" style={{  boxShadow: "0px 3px 66px -24px rgba(0, 0, 0, 0.2)" }}>
                                <img src={"donar-2.jpeg"} alt="Donor" className="donation-image" />
                                <div className="donation-content">
                                    <Typography variant="h6" component="h3" className="donor-name">
                                       Rampatti Devi
                                    </Typography>
                                    {/* <Typography variant="body2" component="p" className="donation-time">
                                        Donated Just now
                                    </Typography> */}
                                    <Typography variant="body2" component="p" className="donation-amount">
                                        Donated 50000  <Divider/>To <span className="donation-cause">Build the Barampati Buddha Vihaar</span>
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div className="donation-card" style={{  boxShadow: "0px 3px 66px -24px rgba(0, 0, 0, 0.2)" }}>
                                <img src={"donar-3.jpeg"} alt="Donor" className="donation-image" />
                                <div className="donation-content">
                                    <Typography variant="h6" component="h3" className="donor-name">
                                        Yashwant Kumar Gautam
                                    </Typography>
                                    {/* <Typography variant="body2" component="p" className="donation-time">
                                        Donated Just now
                                    </Typography> */}
                                    <Typography variant="body2" component="p" className="donation-amount">
                                        Donated 100000  <Divider/> To <span className="donation-cause">Build the Barampati Buddha Vihaar</span>
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className="events-section">
            <Container>
                <Typography variant="h4" component="h2" gutterBottom className="events-title">
                    OUR LATEST EVENTS
                </Typography>
                <Grid container spacing={4} className="events-grid">
                    <Grid item xs={12} md={4} >
                        <div className="event-card">
                            <img src={"/event-1.jpeg"} alt="Event" className="event-image" />
                            <div className="event-content">
                                <Typography variant="caption" component="p" className="event-date">
                                    Sep. 10, 2018   Admin   3
                                </Typography>
                                <Typography variant="h6" component="h3" className="event-title">
                                    World Wide Donation
                                </Typography>
                                <Typography variant="body2" component="p" className="event-time">
                                    10:30AM-03:30PM   Venue Main Campus
                                </Typography>
                                <Typography variant="body2" component="p" className="event-description">
                                    A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                </Typography>
                                <Button variant="text" component={Link} to="/event-details" className="event-link">
                                    Join Event
                                </Button>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className="event-card">
                            <img src={"/event-2.jpeg"} alt="Event" className="event-image" />
                            <div className="event-content">
                                <Typography variant="caption" component="p" className="event-date">
                                    Sep. 10, 2018   Admin   3
                                </Typography>
                                <Typography variant="h6" component="h3" className="event-title">
                                    World Wide Donation
                                </Typography>
                                <Typography variant="body2" component="p" className="event-time">
                                    10:30AM-03:30PM   Venue Main Campus
                                </Typography>
                                <Typography variant="body2" component="p" className="event-description">
                                    A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                </Typography>
                                <Button variant="text" component={Link} to="/event-details" className="event-link">
                                    Join Event
                                </Button>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className="event-card">
                            <img src={"/event-3.jpeg"} alt="Event" className="event-image" />
                            <div className="event-content">
                                <Typography variant="caption" component="p" className="event-date">
                                    Sep. 10, 2018   Admin   3
                                </Typography>
                                <Typography variant="h6" component="h3" className="event-title">
                                    World Wide Donation
                                </Typography>
                                <Typography variant="body2" component="p" className="event-time">
                                    10:30AM-03:30PM   Venue Main Campus
                                </Typography>
                                <Typography variant="body2" component="p" className="event-description">
                                    A small river named Duden flows by their place and supplies it with the necessary regelialia.
                                </Typography>
                                <Button variant="text" component={Link} to="/event-details" className="event-link">
                                    Join Event
                                </Button>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
        <div className="volunteer-section">
                <Container>
                    <Typography variant="h4" component="h2" gutterBottom className="volunteer-title">
                        Our Volunteers
                    </Typography>
                    <Grid container spacing={4} className="volunteer-grid">
                        <Grid item xs={12} md={4}>
                            <div className="volunteer-card">
                                <img src="/Volunteer.jpeg" alt="Volunteer" className="volunteer-image" />
                                <div className="volunteer-content">
                                    <Typography variant="h6" component="h3" className="volunteer-name">
                                        B. R. Gautam
                                    </Typography>
                                    <Typography variant="body2" component="p" className="volunteer-role">
                                       President
                                    </Typography>
                                    <div className="volunteer-social">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div className="volunteer-card">
                                <img src="/Volunteer-2.jpeg" alt="Volunteer" className="volunteer-image" />
                                <div className="volunteer-content">
                                    <Typography variant="h6" component="h3" className="volunteer-name">
                                        Ram Patti
                                    </Typography>
                                    <Typography variant="body2" component="p" className="volunteer-role">
                                        Volunteer
                                    </Typography>
                                    <div className="volunteer-social">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div className="volunteer-card">
                                <img src="/Volunteer-3.jpeg" alt="Volunteer" className="volunteer-image" />
                                <div className="volunteer-content">
                                    <Typography variant="h6" component="h3" className="volunteer-name">
                                        Yashwant Kumar Gautam
                                    </Typography>
                                    <Typography variant="body2" component="p" className="volunteer-role">
                                        Volunteer
                                    </Typography>
                                    <div className="volunteer-social">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
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

export default Home;
