import { Grid, Typography } from "@mui/material";
import React from "react";

export default function Admissions() {
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            padding: "2rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <Typography
              variant="h2"
              sx={{
                color: "#007367",
                fontWeight: 700,
                fontSize: "32px",
                lineHeight: "32px",
                height: "33px",
                width: "100%",
                marginBottom: "2rem",
                marginTop: "0px",
              }}
            >
              MBBS Admissions 2024-2025
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#2D2D2D",
                fontWeight: 400,
                width: "100%",
                textAlign: "justify",
                marginTop: "0px",
              }}
            >
              Embrace the noble path of medicine with our prestigious Bachelor
              of Medicine, Bachelor of Surgery (MBBS) programme! At GIMSR, our
              five-year MBBS programme provides comprehensive medical knowledge
              and hands-on surgical skills to prepare you for a rewarding
              medical career while fostering holistic development and immersive
              learning experiences. Join us now and make a difference in
              people's lives!
            </Typography>
          </div>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <img
            src="/Images/Frame 28.png"
            alt="Admission"
            style={{ width: "100%", height: "70%" }}
          />{" "}
        </Grid>
      </Grid>
    </>
  );
}
