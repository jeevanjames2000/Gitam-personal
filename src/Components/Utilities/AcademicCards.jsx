import React from "react";
import { Grid, Typography } from "@mui/material";
const AcademicCards = ({ image, text }) => {
  return (
    <Grid item xs={12} sm={12} md={12}>
      <div
        style={{
          borderRadius: "20px",
          backgroundColor: "#ffffff",
          boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
          overflow: "hidden",
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
              width: "100%",
              height: "auto",
              objectFit: "cover",
              borderRadius: "20px 20px 0 0",
              display: "block",
            }}
          />
        </div>
        <div
          style={{
            backgroundColor: "#007367",
            borderRadius: "0 0 20px 20px",
            padding: "1rem",
            textAlign: "center",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h6"
            style={{
              color: "#fff",
              fontWeight: "700",
              fontSize: "16px",
              lineHeight: "1.5",
              margin: "0",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {text}
          </Typography>
        </div>
      </div>
    </Grid>
  );
};
export default AcademicCards;
