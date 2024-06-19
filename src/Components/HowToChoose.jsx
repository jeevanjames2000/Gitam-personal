import { Grid, Typography } from "@mui/material";
import React from "react";

const HowToChoose = () => {
  return (
    <>
      <Grid container>
        <Grid
          item
          container
          xs={12}
          display={"flex"}
          justifyContent={"center"}
          gap={2}
          spacing={4}
          style={{ backgroundColor: "#007367" }}
        >
          <Grid item container display={"flex"} justifyContent={"center"}>
            <Typography
              variant="h4"
              style={{ color: "#fff", fontWeight: "700", fontSize: "32px" }}
            >
              How to choose GIMSR{" "}
            </Typography>
          </Grid>
          <Grid
            item
            container
            xs={12}
            gap={2}
            spacing={2}
            justifyContent="center"
          >
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              style={{ textAlign: "center", marginBottom: "1rem" }}
            >
              <div
                style={{
                  border: "2px solid #ffffff",
                  borderRadius: "20px",
                  height: "auto",
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
                  src="/Images/Frame 48.png"
                  alt="step1"
                  style={{ maxWidth: "100%", height: "auto" }} // Ensure image is responsive
                />
                <div style={{ textAlign: "center", marginTop: "1rem" }}>
                  <Typography
                    variant="h6"
                    style={{
                      color: "#007367",
                      fontWeight: "700",
                      fontSize: "24px",
                      marginBottom: "0.5rem",
                      textAlign: "left",
                    }}
                  >
                    Step 1
                  </Typography>
                  <Typography style={{ textAlign: "left" }}>
                    Ensure NEET qualification for MBBS admission.
                  </Typography>
                </div>
              </div>
            </Grid>
            {}
            <Grid item xs={3}>
              <div
                style={{
                  border: "2px solid #fffff",
                  borderRadius: "20px",
                  height: "173px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  backgroundColor: "#ffffff",
                  padding: "1rem",
                  boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
                }}
              >
                <Typography
                  variant="h6"
                  style={{
                    color: "#007367",
                    fontWeight: "700",
                    fontSize: "32px",
                  }}
                >
                  Step 2
                </Typography>
                <Typography>
                  Register online at www.mcc.nic.in for All India Quota (AIQ)
                  counselling and select Deemed Medical Colleges.{" "}
                </Typography>
              </div>
            </Grid>
            {}
            <Grid item xs={3}>
              <div
                style={{
                  border: "2px solid #fffff",
                  borderRadius: "20px",
                  height: "173px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  backgroundColor: "#ffffff",
                  padding: "1rem",
                  boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
                }}
              >
                <Typography
                  variant="h6"
                  style={{
                    color: "#007367",
                    fontWeight: "700",
                    fontSize: "32px",
                  }}
                >
                  Step 3
                </Typography>
                <Typography>
                  Prioritize GIMSR as your first choice during choice filling in
                  round 1 for MBBS.{" "}
                </Typography>
              </div>
            </Grid>
            {}
            <Grid item xs={3}>
              <div
                style={{
                  border: "2px solid #fffff",
                  borderRadius: "20px",
                  height: "173px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  backgroundColor: "#ffffff",
                  padding: "1rem",
                  boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
                }}
              >
                <Typography
                  variant="h6"
                  style={{
                    color: "#007367",
                    fontWeight: "700",
                    fontSize: "32px",
                  }}
                >
                  Step 4
                </Typography>
                <Typography>
                  Stay updated on All India Quota (AIQ) merit announcements
                  at www.mcc.nic.in{" "}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div
                style={{
                  border: "2px solid #fffff",
                  borderRadius: "20px",
                  height: "173px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  backgroundColor: "#ffffff",
                  padding: "1rem",
                  boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
                }}
              >
                <Typography
                  variant="h6"
                  style={{
                    color: "#007367",
                    fontWeight: "700",
                    fontSize: "32px",
                  }}
                >
                  Step 5
                </Typography>
                <Typography>
                  If allotted a seat at GIMSR, download the allotment letter and
                  complete verification and fee payment as per scheduled dates.{" "}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={3}>
              <div
                style={{
                  border: "2px solid #fffff",
                  borderRadius: "20px",
                  height: "173px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  backgroundColor: "#ffffff",
                  padding: "1rem",
                  boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
                }}
              >
                <Typography
                  variant="h6"
                  style={{
                    color: "#007367",
                    fontWeight: "700",
                    fontSize: "32px",
                  }}
                >
                  Step 6
                </Typography>
                <Typography>
                  In case of non-allotment, continue with subsequent counselling
                  rounds (Round 2, Mop-up round, and stray vacancy) with GIMSR
                  as your first preference.{" "}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default HowToChoose;
