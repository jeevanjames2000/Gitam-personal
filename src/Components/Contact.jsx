import React from "react";
import { Grid, Typography } from "@mui/material";
const Contact = () => {
  return (
    <Grid
      container
      justifyContent="center"
      spacing={4}
      style={{
        backgroundColor: "#fff",
        padding: "2rem",
        paddingTop: "1rem",
        paddingBottom: "4rem",
      }}
    >
      <Grid item xs={12} style={{ marginBottom: "2rem" }}>
        <Typography
          variant="h4"
          style={{
            color: "#007367",
            fontWeight: "700",
            fontSize: "32px",
            textAlign: "center",
          }}
        >
          For Admissions, Contact
        </Typography>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item xs={11} sm={10} md={8} lg={10} xl={8} container spacing={2}>
          {}
          <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h4" style={{ color: "#A58255" }}>
                Prof. Narendra
              </Typography>
              <Typography variant="body1" style={{ textAlign: "center" }}>
                9908035979
              </Typography>
            </div>
          </Grid>
          {}
          <Grid
            item
            container
            xs={12}
            sm={1}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{ height: "100%", borderRight: "1px solid #A58255" }}
            ></div>
          </Grid>
          {}
          <Grid item xs={12} sm={12} md={12} xl={4} lg={4}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h4" style={{ color: "#A58255" }}>
                Mr. Mahendra Manoj
              </Typography>
              <Typography variant="body1" style={{ textAlign: "center" }}>
                +91 9781517851
              </Typography>
            </div>
          </Grid>
          {}
          <Grid
            item
            xs={12}
            container
            sm={1}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                height: "100%",
                borderRight: "1px solid #A58255",
              }}
            ></div>
          </Grid>
          {}
          <Grid item xs={12} sm={12} md={12} lg={3} xl={3}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="h4" style={{ color: "#A58255" }}>
                Dr. Neelima Pilli
              </Typography>
              <Typography variant="body1" style={{ textAlign: "center" }}>
                9440847744
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Contact;
