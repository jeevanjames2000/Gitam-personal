import { Grid, Typography } from "@mui/material";
import React from "react";

export default function Eligibility() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          md={6}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <div style={{ width: "621px", height: "415px" }}>
            <img
              src="/Images/Frame 29.png"
              alt="Admission"
              style={{ width: "650px", height: "357px", objectFit: "fill" }}
            />{" "}
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <div style={{ padding: "2rem" }}>
            <Typography
              variant="h2"
              sx={{
                color: "#007367",
                fontWeight: 700,
                fontSize: "32px",
                lineHeight: "32px",
                marginBottom: "1.5rem",
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
                textAlign: "justify",
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
