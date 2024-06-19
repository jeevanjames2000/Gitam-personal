import { Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <Grid container>
        <Grid item container xs={12} display={"flex"} justifyContent={"center"}>
          <Grid
            item
            container
            justifyContent={"center"}
            style={{ margin: "1rem" }}
            xs={12}
          >
            <img src="/Images/gimsrlogo.jpg.png" />
          </Grid>
          <Grid item>
            <Typography variant="h4" style={{ textAlign: "center" }}>
              GITAM Institute of Medical Sciences & Research
            </Typography>
          </Grid>
          <Grid item container xs={12} justifyContent={"center"}>
            <Typography
              variant="body1"
              style={{ textAlign: "center", margin: "1rem" }}
            >
              GITAM (Deemed to be University), Rushikonda, Visakhapatnam – 530
              045.
              <br />
              Andhra Pradesh, India
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={12}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          style={{ height: "123px", backgroundColor: "black" }}
        >
          <Typography
            variant="h5"
            style={{ color: "#ffff", textAlign: "center" }}
          >
            © 2024 GITAM - All Rights Reserved. | Privacy Policy
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
