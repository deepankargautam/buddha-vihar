import React from "react";
import { Container, Typography, Box, Grid, Button } from "@mui/material";

const Causes = () => {
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
              Our Causes
            </Typography>
            <Typography variant="body1" gutterBottom style={{ color: "#fff" }}>
              This trust/charity is a charitable organization that operates
              above caste, class, community, gender, and politics.
            </Typography>
          </Container>
        </Box>
      </div>
      <div className="causes-section">
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
                    Teacher/Training and Research Institutes
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="cause-description"
                  >
                    Establishing teacher/training and research institutes for
                    monks, nuns, novices, and lay practitioners.
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
                    Meditation Centers
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="cause-description"
                  >
                    Establishing meditation centers for monks, nuns, novices,
                    and lay practitioners.
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
                    Training Camps
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="cause-description"
                  >
                    Organizing training programs and camps for monks, nuns,
                    novices, and lay practitioners periodically.
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
                    Preservation of Buddhist Sites
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="cause-description"
                  >
                    Undertaking all activities for the discovery,
                    encroachment-free preservation of ancient Buddhist
                    universities, records, ruins, Mahaviharas, and Buddhist
                    sites.
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
                    Environmental Conservation
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="cause-description"
                  >
                    Making every effort to conserve the environment.
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
                    Buddhist Pilgrimages
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="cause-description"
                  >
                    Organizing pilgrimages for Buddhist devotees periodically.
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
            <Grid item xs={12} md={4}>
              <div className="cause-card">
                <img src="/cause-3.jpg" alt="Cause" className="cause-image" />
                <div className="cause-content">
                  <Typography
                    variant="h6"
                    component="h3"
                    className="cause-title"
                  >
                    Schools, Colleges, and Libraries
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="cause-description"
                  >
                    Establishing schools, colleges, Buddhist universities,
                    archives, research institutes , stupas, pillars, statues of
                    great personalities, and libraries for the promotion and
                    spread of Buddhism.
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
                    Pali Language Preservation
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="cause-description"
                  >
                    Undertaking all activities for the preservation and
                    development of the Pali language.
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
                    Orphanages and Free Hospitals
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="cause-description"
                  >
                    Establishing orphanages, old age homes, and free hospitals.
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
                    Constitution Protection
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="cause-description"
                  >
                    Undertaking all activities to protect the Indian
                    Constitution, running Sunday and public holiday schools for
                    constitutional studies, organizing seminars, and striving to
                    include the Indian Constitution and Buddhist scriptures in
                    the curriculum across India.
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
                    Women Empowerment
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="cause-description"
                  >
                    Undertaking all activities to ensure respect, empowerment,
                    equality, security, and protection for women.
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
                    Publishing
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="cause-description"
                  >
                    Arranging funds for publishing activities and publishing
                    magazines.
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
                <img src="/cause-3.jpg" alt="Cause" className="cause-image" />
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
                    Village Awakening
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="cause-description"
                  >
                    Conducting cadres in villages for the awakening of the
                    entire society.
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
                    Dr. Ambedkar's Teachings
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="cause-description"
                  >
                    Bringing the entire enlightened class together on one
                    platform with the teachings of Dr. Bhimrao Ambedkar -
                    "Educate, Organize, Agitate" - and establishing
                    friendliness, compassion, joy, and equanimity in the entire
                    society.
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
                    Educational Institutions
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className="cause-description"
                  >
                    Establishing and operating primary schools, secondary
                    schools, inter colleges, undergraduate and postgraduate
                    institutions, and libraries.
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
          <Box sx={{ mt: 8, textAlign: "center", bgcolor: "#ccc", py: 4 }}>
            <Typography variant="h5" gutterBottom>
              Helping the Homeless, Hungry, and Hurting Children
            </Typography>
            <Button variant="contained" color="success">
              Donate Now
            </Button>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default Causes;
