import { Grid, Typography } from "@mui/material";
import React from "react";

const Fearless = () => {
  return (
    <Grid
      container
      justifyContent="center"
      //   alignItems="center"
      spacing={2}
      style={{ minHeight: "auto", padding: "2rem" }}
    >
      <Grid
        item
        container
        justifyContent={"end"}
        gap={4}
        xs={12}
        md={6}
        sm={6}
        style={{ textAlign: "center" }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "#007367",
            fontWeight: 700,
            fontSize: "32px",
            // lineHeight: "32px",
            width: "600px",

            // marginBottom: "0.5rem",
            textAlign: "left",
          }}
        >
          Fearless Heart: <br />
          The Story of Dr. Swathi Reddy
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#2D2D2D",
            fontWeight: 400,
            textAlign: "initial",
            width: "600px",
          }}
        >
          Dr. Swathi Reddy, a GIMSE alumna, embodies the spirit of empathy and
          dedication. On September 12, 2023, she answered destiny's call, aiding
          a fellow passenger in labour on a train. Armed with her training and
          resourcefulness, she facilitated a safe delivery, showcasing the
          essence of a true healer.
          <br /> GIMSR's core values and Dr. Reddy's commitment converge in her
          remarkable journey. She proves that education coupled with compassion
          can create impactful moments, inspiring both her peers and future
          medical practitioners. Her story is a living testament to the power of
          education and humanity, echoing GIMSR's founding principles.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} display="flex" justifyContent="start">
        <img
          src="/Images/fearless.png"
          alt="Admission"
          style={{ width: "100%", maxWidth: "621px", height: "auto" }}
        />
      </Grid>
    </Grid>
  );
};

export default Fearless;
