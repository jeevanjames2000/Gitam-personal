import React from "react";
import { Grid, Typography } from "@mui/material";

const LifeonCampus = () => {
  const handleItemClick = (event) => {
    console.log("data");
  };

  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{
          minHeight: "100vh",
          backgroundColor: "#fff",
          padding: "2rem",
          paddingTop: "2rem",
          paddingBottom: "4rem",
        }}
      >
        <Grid item xs={12}>
          <Typography
            variant="h4"
            style={{
              color: "#007367",
              fontWeight: "700",
              fontSize: "32px",
              textAlign: "center",
            }}
          >
            Life on Campus
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            style={{ textAlign: "center", marginBottom: "1rem" }}
          >
            GITAM fosters a vibrant culture that keeps the student body engaged
            with a calendar packed with cultural events, conferences,
            exhibitions, sports and a lot more
          </Typography>
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="center">
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "800px",
            }}
          >
            <img
              src="/Images/GITAM.png"
              alt="Gitam logo"
              style={{ width: "100%", height: "auto", borderRadius: "50px" }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "80%", // Adjusted width for better responsiveness
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                borderRadius: "10px",
                padding: "20px",
              }}
            >
              <Grid container spacing={2}>
                {[
                  "Vibrant Festivities",
                  "Comfortable Hostels",
                  "Diverse Student Clubs",
                  "Sports Excellence",
                ].map((item, index) => (
                  <Grid item xs={12} key={index}>
                    <div
                      style={{
                        color: "#fff",
                        fontSize: "1.5rem",
                        cursor: "pointer",
                        textAlign: "center", // Center align text
                      }}
                      onClick={() => handleItemClick(item)}
                    >
                      <Typography variant="body1">{item}</Typography>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default LifeonCampus;
