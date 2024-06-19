import { Grid, Typography } from "@mui/material";
import React from "react";
export default function Eligibility() {
  return (
    <>
      <Grid container spacing={3} justifyContent="center">
        {}
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          justifyContent="end"
          alignItems="center"
        >
          <div style={{ maxWidth: "100%", height: "auto" }}>
            <img
              src="/Images/Frame 29.png"
              alt="Admission"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
        </Grid>
        {}
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          justifyContent="left"
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
              Eligibility
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
              To be eligible for MBBS admission, candidates must be at least 17
              years old on or before 31st December of the admission year and
              have completed their intermediate / H.S.C / +2 or equivalent with
              English, Physics, Chemistry, and Biology/Botany & Zoology, meeting
              the minimum marks required by the National Medical Council (NMC).
              Additionally, they must qualify the undergraduate National
              Eligibility cum Entrance Test (NEET) with the score prescribed by
              the National Medical Council (NMC).
            </Typography>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
