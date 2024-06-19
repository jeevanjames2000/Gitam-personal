import React from "react";
import Header from "./Components/Header";
import ImageSlider from "./Components/ImageSlider";
import { Grid } from "@mui/material";
import FeaturesSection from "./Components/FeatureSection";
import Highlights from "./Components/Highlights";
import Admissions from "./Components/Admissions";
import Eligibilty from "./Components/Eligibilty";
import FeeStructure from "./Components/FeeStructure";
import Merit from "./Components/Merit";
import HowToChoose from "./Components/HowToChoose";
import Academics from "./Components/Academic";
import Experiences from "./Components/Experiences";
import Fearless from "./Components/Fearless";
import LifeonCampus from "./Components/LifeOnCampus";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function Main() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <ImageSlider />
        </Grid>
        <Grid item xs={12}>
          <FeaturesSection />
        </Grid>
        <Grid item xs={12}>
          <Highlights />
        </Grid>
        <Grid item xs={12}>
          <Admissions />
        </Grid>
        <Grid item xs={12}>
          <Eligibilty />
        </Grid>
        <Grid item xs={12}>
          <FeeStructure />
        </Grid>
        <Grid item xs={12}>
          <Merit />
        </Grid>
        <Grid item xs={12}>
          <HowToChoose />
        </Grid>
        <Grid item xs={12}>
          <Academics />
        </Grid>

        <Grid item xs={12}>
          <Experiences />
        </Grid>
        <Grid item xs={12}>
          <Fearless />
        </Grid>
        <Grid item xs={12}>
          <LifeonCampus />
        </Grid>
        <Grid item xs={12}>
          <Contact />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
}
