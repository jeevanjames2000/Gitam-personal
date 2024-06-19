import { Grid, Typography } from "@mui/material";
import React from "react";
export default function Admissions() {
  return (
    <>
      <Grid container justifyContent="center">
        {}
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          justifyContent="end"
          alignItems={"center"}
        >
          <div style={{ maxWidth: "600px" }}>
            <Typography
              variant="h2"
              sx={{
                color: "#007367",
                fontWeight: 700,
                fontSize: "28px",
                lineHeight: "32px",
                marginBottom: "1rem",
                textAlign: "left",
              }}
            >
              MBBS Admissions 2024-2025{" "}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#2D2D2D",
                fontWeight: 400,
                lineHeight: "24px",
                textAlign: "left",
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
        {}
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          justifyContent="start"
          alignItems="center"
        >
          <div style={{ maxWidth: "100%", height: "auto" }}>
            <img
              src="/Images/Frame 28.png"
              alt="Admission"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
        </Grid>
      </Grid>
    </>
  );
}
