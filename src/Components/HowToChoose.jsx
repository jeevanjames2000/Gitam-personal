import React from "react";
import { Grid, Typography } from "@mui/material";
import StepComponent from "./Utilities/StepComponent";

const HowToChoose = () => {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        spacing={4}
        style={{ padding: "2rem", backgroundColor: "#007367" }}
      >
        <Grid item xs={12}>
          <Typography
            variant="h4"
            style={{
              color: "#fff",
              fontWeight: "700",
              fontSize: "32px",
              textAlign: "center",
            }}
          >
            How to choose GIMSR
          </Typography>
        </Grid>

        <Grid item xs={12} md={10} lg={8}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <StepComponent
                stepNumber={1}
                stepImg={"/Images/Frame 48.png"}
                stepText={"Ensure NEET qualification for MBBS admission."}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <StepComponent
                stepNumber={2}
                stepImg={"/Images/step2.png"}
                stepText="Register online at www.mcc.nic.in for All India Quota (AIQ) counselling and select Deemed Medical Colleges."
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <StepComponent
                stepNumber={3}
                stepImg={"/Images/step3.png"}
                stepText="Prioritize GIMSR as your first choice during choice filling in round 1 for MBBS."
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <StepComponent
                stepNumber={4}
                stepImg={"/Images/tep4.png"}
                stepText={`Stay updated on All India Quota (AIQ) merit announcements at`}
                link="http://www.mcc.nic.in"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <StepComponent
                stepNumber={5}
                stepImg={"/Images/step5.png"}
                stepText="If allotted a seat at GIMSR, download the allotment letter and complete verification and fee payment as per scheduled dates."
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <StepComponent
                stepNumber={6}
                stepImg={"/Images/step6.png"}
                stepText="In case of non-allotment, continue with subsequent counselling rounds (Round 2, Mop-up round, and stray vacancy) with GIMSR as your first preference."
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default HowToChoose;
