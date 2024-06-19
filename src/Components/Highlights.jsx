import { Grid, Typography } from "@mui/material";
import React from "react";
import HighlightsCard from "./Utilities/HighlightsCard";
export default function Highlights() {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        style={{
          height: "100%",
          backgroundColor: "#DDD",
          paddingTop: "4rem",
          paddingBottom: "4rem",
        }}
      >
        <Grid
          container
          justifyContent="center"
          spacing={2}
          xs={12}
          sm={10}
          md={8}
          lg={8}
        >
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <HighlightsCard
              backgroundColor="#007367"
              title="Key Highlights"
              value="Key Highlights"
              description=""
              height="200px"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <HighlightsCard
              iconSrc="/Images/Frame 22.png"
              title="Doctors"
              value="349"
              description="Doctors"
              height="200px"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <HighlightsCard
              iconSrc="/Images/Frame 23.png"
              title="Average Daily Out-Patients"
              value="1200"
              description="Average Daily Out-Patients"
              height="200px"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <HighlightsCard
              iconSrc="/Images/operation.png"
              title="Operation Theatres"
              value="12"
              height="200px"
              description="Operation Theatres"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <HighlightsCard
              iconSrc="/Images/naac.png"
              title="NAAC A++"
              value="NAAC A++"
              description="Accredited"
              height="200px"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <HighlightsCard
              iconSrc="/Images/cathlab.png"
              title="State-of-the-art"
              value="Cath Lab"
              height="200px"
              description="State-of-the-art"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <HighlightsCard
              iconSrc="/Images/rtprc.png"
              title="RT-PCR Laboratory"
              value="RT-PCR Laboratory"
              height="200px"
              description="NABL Accredited and ICMR Approved"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <HighlightsCard
              iconSrc="/Images/male.png"
              height="200px"
              title="1:1.5"
              value="Male-to-Female Ratio"
              description="Male-to-Female Ratio"
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
