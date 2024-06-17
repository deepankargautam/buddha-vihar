import React from "react";
import { Container, Grid, Typography, Box, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#E6F4F1", py: 5 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              TMFT
            </Typography>
            <Typography variant="body2" paragraph>
              Promoting peace and compassion through compassionate actions
              inspired by Buddhism.
            </Typography>
            <Box>
              <Link href="#" color="inherit" sx={{ mr: 1 }}>
                <FacebookIcon />
              </Link>
              <Link href="#" color="inherit" sx={{ mr: 1 }}>
                <TwitterIcon />
              </Link>
              <Link href="#" color="inherit" sx={{ mr: 1 }}>
                <InstagramIcon />
              </Link>
              <Link href="#" color="inherit">
                <PinterestIcon />
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom>
              Services
            </Typography>
            <Typography variant="body2">
              <Link href="#" color="inherit">
                Donate
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#" color="inherit">
                Sponsor
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#" color="inherit">
                Fundraise
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#" color="inherit">
                Volunteer
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="#" color="inherit">
                Partner
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              Contacts
            </Typography>
            <Typography variant="body2">+91 7570877174</Typography>
            <Typography variant="body2">
              barampatibuddhavihaar@gmail.com
            </Typography>
            <Typography variant="body2">
              Ratanmai Dileeppur Pratapgarh 230001{" "}
            </Typography>
            <Typography variant="body2">Uttar Pradesh India</Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            {/* <Typography variant="h6" gutterBottom>
              Top News
            </Typography> */}
            <Box display="flex" mb={2}>
              {/* <Box
                component="img"
                src="/path/to/image1.png"
                alt="news 1"
                sx={{ width: 80, height: 80, mr: 2 }}
              /> */}
              <Box>
                {/* <Typography variant="body2">School for African Childrens</Typography> */}
                {/* <Typography variant="caption" color="text.secondary">Jun 12, 2019</Typography> */}
              </Box>
            </Box>
            <Box display="flex">
              {/* <Box
                component="img"
                src="/path/to/image2.png"
                alt="news 2"
                sx={{ width: 80, height: 80, mr: 2 }}
              /> */}
              <Box>
                {/* <Typography variant="body2">School for African Childrens</Typography> */}
                {/* <Typography variant="caption" color="text.secondary">Jun 12, 2019</Typography> */}
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box mt={5} textAlign="center">
          <Typography variant="body2" color="text.secondary">
            Copyright ©2024 All rights reserved | TATHAGAT MAHAVIR FOUNDATION
            TRUST
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
