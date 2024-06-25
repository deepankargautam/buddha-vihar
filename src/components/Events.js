import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";

const Events = () => {
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
              Events
            </Typography>
            <Typography variant="body1" gutterBottom style={{ color: "#fff" }}>
              {/* This trust/charity is a charitable organization that operates
              above caste, class, community, gender, and politics. */}
            </Typography>
          </Container>
        </Box>
      </div>
      <div className="events-section" style={{ padding: "2rem" }}>
        <Container>
          <Typography variant="h4" component="h2" gutterBottom>
            OUR LATEST EVENTS
          </Typography>
          <Grid container spacing={4}>
            {/* Event 1 */}
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

            {/* Event 2 */}
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

            {/* Event 3 */}
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
    </>
  );
};

export default Events;
