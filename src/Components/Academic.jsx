import { Grid, Typography } from "@mui/material";
import React from "react";
import StepComponent from "./Utilities/StepComponent";
import AcademicCards from "./Utilities/AcademicCards";

// import { Container } from './styles';
// import './styles.scss';

const Academics = () => {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        spacing={4}
        style={{ backgroundColor: "#ffff" }}
      >
        <Grid item xs={12}>
          <Typography
            variant="h4"
            style={{
              color: "#007367",
              fontWeight: "700",
              fontSize: "32px",
              textAlign: "center",
              marginBottom: "2rem",
              marginTop: "1rem",
            }}
          >
            Academic Differentiators: Theory Meets Real-World Applications at
            GIMSR{" "}
          </Typography>
          <Typography variant="body2" style={{ textAlign: "center" }}>
            Embark on a transformative journey at GIMSR, where theory meets
            practice through hands-on experience in our
            <br /> state-of-the-art labs and facilities, empowering healthcare
            professionals for excellence.
          </Typography>
        </Grid>

        <Grid item xs={12} md={10} lg={8}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <AcademicCards
                image={"/Images/Skills-Lab.png"}
                text={"Skills Lab"}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <AcademicCards
                image={"/Images/tech.png"}
                text="Technology Rich Learning Spaces"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <AcademicCards image={"/Images/Cath-Lab.png"} text="Cath Lab" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <AcademicCards
                image={"/Images/comp.png"}
                text={`Computer-Assisted Learning(CAL)`}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <AcademicCards
                image={"/Images/patho.png"}
                text="Pathology Museum"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <AcademicCards
                image={"/Images/anatomy.png"}
                text="Anatomy Museum"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Academics;
