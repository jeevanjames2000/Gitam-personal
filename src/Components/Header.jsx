import { Button, Grid } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <>
      <Grid container >
        <Grid
          item
          container
          xs={12}
          style={{
            height: "6rem",
            width: "100%",
          
            backgroundColor: "white",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
           rowGap:'2rem',
            alignItems: "center",
          }}
        >
          <Grid item >
            <img
              src={"https://www.gitam.edu/themes/custom/gitam/logo.png"}
              style={{ height: "auto", width: "auto" }}
            />
          </Grid>
          <Grid item>
            <Button
              style={{
                textAlign: "center",
                width: "10rem",
                height: "3rem",
                backgroundColor: "#007367",
                color: "white",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              APPLY NOW
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
