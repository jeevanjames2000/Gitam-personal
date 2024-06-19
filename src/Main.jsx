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

export default function Main() {
  return (
    <>
      <Grid container spacing={3}>
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
        {/* <Grid item xs={12}>
          <HowToChoose />
        </Grid> */}
      </Grid>
    </>
  );
}
