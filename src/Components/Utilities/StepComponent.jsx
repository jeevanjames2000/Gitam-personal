import React from "react";
import { Grid, Typography } from "@mui/material";

const StepComponent = ({ stepNumber, stepText, stepImg, link }) => {
  return (
    <Grid container>
      <Grid item xs={12} style={{ textAlign: "center", marginBottom: "1rem" }}>
        <div
          style={{
            border: "2px solid #ffffff",
            borderRadius: "20px",
            height: "220px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "#ffffff",
            padding: "1rem",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
          }}
        >
          <img
            src={stepImg}
            alt="step1"
            style={{ maxWidth: "100%", height: "auto", marginRight: "1rem" }}
          />
          <div style={{ textAlign: "left", width: "100%" }}>
            <Typography
              variant="h6"
              style={{
                color: "#007367",
                fontWeight: "700",
                fontSize: "24px",
                marginBottom: "0.5rem",
              }}
            >
              Step {stepNumber}
            </Typography>
            <Typography style={{ textAlign: "left" }}>{stepText}</Typography>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#007367", textDecoration: "none" }}
              >
                {link}
              </a>
            )}
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default StepComponent;
