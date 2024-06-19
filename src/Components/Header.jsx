import { Button, Grid } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <>
      <Grid container>
        <Grid
          item
          container
          xs={12}
          sm={12}
          style={{
            height: "auto",
            width: "auto",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            // rowGap: "1rem",
            alignItems: "center",
          }}
        >
          <Grid item xs={12} sm={6} display={"flex"} justifyContent={"center"}>
            <img
              src={"https://www.gitam.edu/themes/custom/gitam/logo.png"}
              alt="GITAM Logo"
              style={{ height: "auto", maxWidth: "100%" }}
            />
          </Grid>

          <Grid item xs={12} sm={6} display={"flex"} justifyContent={"center"}>
            <Button
              fullWidth
              variant="contained"
              style={{
                height: "3rem",
                backgroundColor: "#007367",
                color: "white",
                fontSize: "1rem",
                fontWeight: "bold",
                maxWidth: "220px",
                margin: "auto",
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
