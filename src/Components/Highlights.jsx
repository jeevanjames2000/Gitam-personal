import { Grid, Typography } from "@mui/material";
import React from "react";

export default function Highlights() {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        style={{ padding: "2rem" }}
        spacing={2}
      >
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div
            style={{
              border: "2px solid #007367",
              borderRadius: "10px",
              // height: "235px",
              // width: "288px",
              backgroundColor: "#007367",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem",
              marginBottom: "1rem",
            }}
          >
            <Typography
              variant="h3"
              style={{
                color: "#fff",
                textAlign: "left",
                width: "100%",

                paddingLeft: "1rem",
              }}
            >
              Key
            </Typography>
            <Typography
              variant="h3"
              style={{
                color: "#fff",
                textAlign: "left",
                width: "100%",
                paddingLeft: "1rem",
                marginBottom: "3.5rem",
              }}
            >
              Highlights
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div
            style={{
              border: "2px solid #007367",
              borderRadius: "10px",
              // height: "235px",
              // width: "288px",
              backgroundColor: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src="/Images/Frame 22.png"
                alt="349 doctors"
                style={{ width: "100px", height: "100px" }}
              />
              <Typography
                style={{
                  color: "#007367",
                  textAlign: "center",
                  marginTop: "0.5rem",
                  fontWeight: "700",
                  fontSize: "26px",
                }}
              >
                349
              </Typography>
              <Typography
                style={{
                  color: "#007367",
                  textAlign: "center",
                  fontWeight: "400",
                  fontSize: "16px",
                }}
              >
                Doctors
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div
            style={{
              border: "2px solid #007367",
              borderRadius: "10px",
              // height: "235px",
              // width: "288px",
              backgroundColor: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src="/Images/Frame 23.png"
                alt="1200"
                style={{ width: "100px", height: "100px" }}
              />
              <Typography
                style={{
                  color: "#007367",
                  textAlign: "center",
                  marginTop: "0.5rem",
                  fontWeight: "700",
                  fontSize: "26px",
                }}
              >
                1200
              </Typography>
              <Typography
                style={{
                  color: "#007367",
                  textAlign: "center",
                  fontWeight: "400",
                  fontSize: "16px",
                }}
              >
                Average Daily Out-Patients
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div
            style={{
              border: "2px solid #007367",
              borderRadius: "10px",
              // height: "235px",
              // width: "288px",
              backgroundColor: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src="/Images/operation.png"
                alt="operations"
                style={{ width: "100px", height: "100px" }}
              />
              <Typography
                style={{
                  color: "#007367",
                  textAlign: "center",
                  marginTop: "0.5rem",
                  fontWeight: "700",
                  fontSize: "26px",
                }}
              >
                12
              </Typography>
              <Typography
                style={{
                  color: "#007367",
                  textAlign: "center",
                  fontWeight: "400",
                  fontSize: "16px",
                }}
              >
                Operation Theatres
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div
            style={{
              border: "2px solid #007367",
              borderRadius: "10px",
              // height: "235px",
              // width: "288px",
              backgroundColor: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src="/Images/naac.png"
                alt="Naac"
                style={{ width: "100px", height: "100px" }}
              />
              <Typography
                style={{
                  color: "#007367",
                  textAlign: "center",
                  marginTop: "0.5rem",
                  fontWeight: "700",
                  fontSize: "26px",
                }}
              >
                NAAC A++
              </Typography>
              <Typography
                style={{
                  color: "#007367",
                  textAlign: "center",
                  fontWeight: "400",
                  fontSize: "16px",
                }}
              >
                Accredited
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div
            style={{
              border: "2px solid #007367",
              borderRadius: "10px",
              // height: "235px",
              // width: "288px",
              backgroundColor: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src="/Images/cathlab.png"
                alt="cathlab"
                style={{ width: "100px", height: "100px" }}
              />
              <Typography
                style={{
                  color: "#007367",
                  textAlign: "center",
                  marginTop: "0.5rem",
                  fontWeight: "700",
                  fontSize: "26px",
                }}
              >
                State-of-the-art
              </Typography>
              <Typography
                style={{
                  color: "#007367",
                  textAlign: "center",
                  fontWeight: "400",
                  fontSize: "16px",
                }}
              >
                Cath Lab
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div
            style={{
              border: "2px solid #007367",
              borderRadius: "10px",
              // height: "235px",
              // width: "288px",
              backgroundColor: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src="/Images/rtprc.png"
                alt="rtprc"
                style={{ width: "100px", height: "100px" }}
              />
              <Typography
                style={{
                  color: "#007367",
                  textAlign: "center",
                  marginTop: "0.5rem",
                  fontWeight: "700",
                  fontSize: "26px",
                }}
              >
                RT-PCR Laboratory
              </Typography>
              <Typography
                style={{
                  color: "#007367",
                  textAlign: "center",
                  fontWeight: "400",
                  fontSize: "16px",
                }}
              >
                NABL Accredited and ICMR Approved
              </Typography>
            </div>
          </div>
        </Grid>{" "}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          {" "}
          <div
            style={{
              border: "2px solid #007367",
              borderRadius: "10px",
              // height: "235px",
              // width: "288px",
              backgroundColor: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img
                src="/Images/male.png"
                alt="cathlab"
                style={{ width: "100px", height: "100px" }}
              />
              <Typography
                style={{
                  color: "#007367",
                  textAlign: "center",
                  marginTop: "0.5rem",
                  fontWeight: "700",
                  fontSize: "26px",
                }}
              >
                1:1.5
              </Typography>
              <Typography
                style={{
                  color: "#007367",
                  textAlign: "center",
                  fontWeight: "400",
                  fontSize: "16px",
                }}
              >
                Male-to-Female Ratio
              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
