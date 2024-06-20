import { Grid, Typography } from "@mui/material";
import React from "react";
const LifeonCampus = () => {
  const handleItemClick = (event) => {
    console.log("data");
  };
  return (
    <>
      <Grid
        container
        justifyContent="center"
        spacing={4}
        style={{
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
            with a calendar packed with cultural events,
            <br /> conferences, exhibitions, sports and a lot more
          </Typography>
        </Grid>
        <div style={{ borderRadius: "50px", overflow: "hidden" }}>
          <Grid
            item
            container
            xs={12}
            display={"flex"}
            justifyContent={"center"}
          >
            <div style={{ position: "relative" }}>
              {}
              <div style={{ zIndex: -1 }}>
                <img src="/Images/GITAM.png" alt="Gitam logo" />
              </div>
              {}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 1,
                }}
              >
                <ul
                  style={{
                    listStyleType: "none",
                    textAlign: "left",
                    padding: 0,
                    paddingLeft: "10rem",
                    paddingTop: "2rem",
                  }}
                >
                  <li
                    style={{
                      fontSize: "2.5rem",
                      margin: "10px 0",
                      cursor: "pointer",
                      color: "#fff",
                    }}
                    onClick={() => handleItemClick("Vibrant Festivities")}
                  >
                    Vibrant Festivities
                  </li>
                  <li
                    style={{
                      fontSize: "2.5rem",
                      margin: "10px 0",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                    onClick={() => handleItemClick("Comfortable Hostels")}
                  >
                    Comfortable Hostels
                  </li>
                  <li
                    style={{
                      fontSize: "2.5rem",
                      margin: "10px 0",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                    onClick={() => handleItemClick("Diverse Student Clubs")}
                  >
                    Diverse Student Clubs
                  </li>
                  <li
                    style={{
                      fontSize: "2.5rem",
                      margin: "10px 0",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                    onClick={() => handleItemClick("Sports Excellence")}
                  >
                    Sports Excellence
                  </li>
                </ul>
              </div>
            </div>
          </Grid>
        </div>
      </Grid>
    </>
  );
};
export default LifeonCampus;
