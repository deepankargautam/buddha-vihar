import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { styled } from "@mui/system";

const SectionContainer = styled("div")({
  // backgroundImage: "url(/path-to-your-image.png)", // Update the path accordingly
  width: "100%",
  // height: "100%",
  backgroundImage: `repeating-conic-gradient(
    from 0deg,
    orangered,
    transparent 10deg,
    orange 10deg,
    orangered 20deg
  )`,
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  backgroundColor: "orange",

  // backgroundSize: "cover",
  backgroundPosition: "center",
  height: "300px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  textAlign: "center",
  color: "#fff",
});

const Overlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
});

const Content = styled(Container)({
  position: "relative",
  zIndex: 2,
});

const DonateSection = () => {
  return (
    <SectionContainer>
      <Overlay />
      <Content>
        <Typography variant="h4" gutterBottom>
          Donate Now
        </Typography>
        <Typography variant="body1" gutterBottom>
          We appreciate your efforts to donate to the The Buddhist society of
          India founded by Thathagat Maharvihar Foundation Trust for fulfilling
          the arm & objectives of the society.
        </Typography>
        <Button variant="contained" color="primary">
          DONATE NOW
        </Button>
      </Content>
    </SectionContainer>
  );
};

export default DonateSection;
