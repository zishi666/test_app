import React, { useRef, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Color_eclipses from "../../assets/Ellipse 32.png";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Slider from "../sliderSection/slider";
import brave from "../../assets/clients/brave.png";
import circle from "../../assets/clients/circle.png";
import discord from "../../assets/clients/discord.png";
import google from "../../assets/clients/google.png";
import jump from "../../assets/clients/jump.png";
import lalapaiza from "../../assets/clients/lalpaiza.png";
import magic_eden from "../../assets/clients/magic_eden.png";

import "./LandingPage.css";

const clientsImages = [
  brave,
  circle,
  discord,
  google,
  jump,
  lalapaiza,
  magic_eden,
];

const LandingPage = () => {
  return (
    <section className="LandingPageBody">
      <Navbar />
      <img src={Color_eclipses} alt="nothing" className="FloatingImag" />
      <Container maxWidth="xl" sx={{ zIndex: 9 }}>
        <Box
          sx={{
            bgcolor: "transparent",
            height: "auto",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            mt: "30px",
          }}
        >
          <div className="upperSection">
            <div className="heroHeading">
              Harnessing Artificial Intelligence Tools for Naturally Image
              Generator
            </div>

            <div className="heroSubSection">
              <div className="emojies">🔥😍👍🏻</div>
              <p>
                In the realm of creativity, technology has become a powerful
                ally for artists, writers, designers, and creators of all kinds.
                Artificially intelligent (AI) tools have emerged as valuable
                companions, assisting naturally creative humans in their
                creative processes.
              </p>
            </div>
          </div>
        </Box>
      </Container>
      <Slider />
      <div className="collaboration">
        <p>
          Powering tools and integrations from companies all around the world
        </p>
        <div className="clientSection">
          {clientsImages.map((client) => {
            return <img id={client} src={client} alt="" />;
          })}
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
