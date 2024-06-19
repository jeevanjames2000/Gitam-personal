import { Grid, Typography } from "@mui/material";
import React from "react";
const Merit = () => {
  return (
    <>
      <Grid container>
        <Grid
          item
          container
          xs={12}
          display={"flex"}
          justifyContent={"center"}
          gap={4}
        >
          <Grid item container display={"flex"} justifyContent={"center"}>
            <Typography
              variant="h4"
              style={{ color: "#004740", fontWeight: "700", fontSize: "32px" }}
            >
              Merit Scholarships for NEET 2024 Ranks
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
            {}
            <Grid item>
              <div
                style={{
                  border: "2px solid #fffff",
                  borderRadius: "20px",
                  height: "173px",
                  width: "275px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  backgroundColor: "#ffffff",
                  padding: "1rem",
                  boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
                }}
              >
                <Typography variant="body1">1 to 1,50,000</Typography>
                <Typography
                  variant="h4"
                  style={{
                    color: "#007367",
                    fontWeight: "700",
                    fontSize: "32px",
                  }}
                >
                  Scholarship: 50%
                </Typography>
                <Typography>Fee Waiver up to ₹ 12,68,000</Typography>
              </div>
            </Grid>
            {}
            <Grid item>
              <div
                style={{
                  border: "2px solid #fffff",
                  borderRadius: "20px",
                  height: "173px",
                  width: "275px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  backgroundColor: "#ffffff",
                  padding: "1rem",
                  boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
                }}
              >
                <Typography variant="body1">1,50,001 to 3,00,000</Typography>
                <Typography
                  variant="h4"
                  style={{
                    color: "#007367",
                    fontWeight: "700",
                    fontSize: "32px",
                  }}
                >
                  Scholarship: 25%
                </Typography>
                <Typography>Fee Waiver up to ₹ 6,34,000</Typography>
              </div>
            </Grid>
            {}
            <Grid item>
              <div
                style={{
                  border: "2px solid #fffff",
                  borderRadius: "20px",
                  height: "173px",
                  width: "275px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  backgroundColor: "#ffffff",
                  padding: "1rem",
                  boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
                }}
              >
                <Typography variant="body1">3,00,001 to 4,50,000</Typography>
                <Typography
                  variant="h4"
                  style={{
                    color: "#007367",
                    fontWeight: "700",
                    fontSize: "32px",
                  }}
                >
                  Scholarship: 15%
                </Typography>
                <Typography>Fee Waiver up to ₹ 3,80,000</Typography>
              </div>
            </Grid>
            {}
            <Grid item>
              <div
                style={{
                  border: "2px solid #fffff",
                  borderRadius: "20px",
                  height: "173px",
                  width: "275px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  backgroundColor: "#ffffff",
                  padding: "1rem",
                  boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
                }}
              >
                <Typography variant="body1">4,50,000 - 6,00,000</Typography>
                <Typography
                  variant="h4"
                  style={{
                    color: "#007367",
                    fontWeight: "700",
                    fontSize: "32px",
                  }}
                >
                  Scholarship: 10%
                </Typography>
                <Typography>Fee Waiver up to ₹ 2,53,000</Typography>
              </div>
            </Grid>
          </Grid>
          <Grid item container xs={12} justifyContent="center">
            <Typography variant="h6">
              Note:
              <ul style={{ paddingLeft: "20px", marginTop: "0.5rem" }}>
                <li>
                  Merit scholarship continues for subsequent years if the
                  student maintains a minimum of 65% aggregate in each year.
                </li>
                <li>
                  Starting from the second year and excluding merit scholarship
                  recipients, top-performing students can qualify for a 10% fee
                  <br />
                  waiver for the following year by achieving 65% aggregate. This
                  applies to the cohort's top 5% of students, requiring full
                  exam participation.
                </li>
              </ul>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Merit;
