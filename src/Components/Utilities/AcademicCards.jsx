import React from "react";
import { Grid, Typography } from "@mui/material";

const AcademicCards = ({ image, text }) => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={6} md={12}>
        <div
          style={{
            borderRadius: "20px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#ffffff",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
            // marginBottom: "2rem",
          }}
        >
          <div
            style={{
              width: "100%",
              borderRadius: "20px 20px 0 0",
              overflow: "hidden",
            }}
          >
            <img
              src={image}
              alt="academics"
              style={{
                width: "auto",
                height: "100%",
                objectFit: "contain",
                borderRadius: "20px 20px 0 0",
              }}
            />
          </div>
          <div
            style={{
              width: "100%",
              backgroundColor: "#007367",
              height: "auto",
              borderRadius: "0 0 20px 20px",
            }}
          >
            <Typography
              variant="h6"
              style={{
                color: "#fff",
                fontWeight: "700",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              {text}
            </Typography>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default AcademicCards;
