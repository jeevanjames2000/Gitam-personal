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
        spacing={2}
        style={{
          backgroundColor: "#ffff",
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

        <Grid item xs={12} md={10} lg={8} style={{ marginBottom: "4rem" }}>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <AcademicCards
                image={"/Images/Skills-Lab.png"}
                text={"Skills Lab"}
                hover={
                  "Step into a world of innovation and learning at GIMSR's Skill Lab for Simulation & Research. As you embark on your medical journey, our state-of-the-art facility awaits, offering advanced training in various medical and surgical areas. With cutting-edge technology and lifelike mannequins, you'll experience a hands-on approach to learning, bridging the gap between theory and practice"
                }
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <AcademicCards
                image={"/Images/tech.png"}
                text="Technology Rich Learning Spaces"
                hover={
                  "Step into a world of immersive education at GIMSR, where we prioritize ergonomic design to ensure comfort and focus during learning.Our thoughtfully designed classrooms create an environment that enhances concentration and knowledge retention, fostering an inspiring learning space for future healthcare leaders. With personalized teaching, students are empowered to reach their full potential, propelling them towards a fulfilling medical career where knowledge and passion intertwine"
                }
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <AcademicCards
                image={"/Images/Cath-Lab.png"}
                text="Cath Lab"
                hover={
                  "Experience the pinnacle of innovation and learning at GIMSR's Cath Lab, a rare gem that sets us apart. Where medical excellence comes to life with cutting-edge equipment like Hemodynamic Monitors and Maquet Ventilators, our state-of-the-art cath lab offers hands-on training in essential medical interventions, empowering healthcare professionals for the future."
                }
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <AcademicCards
                image={"/Images/comp.png"}
                hover={
                  "Step into the future of pharmacology education at GIMSR's state-of-the-art Computer-assisted Learning (CAL) lab. Experience the power of interactive multimedia software, bringing pharmacological experiments to life like never before. No more traditional animal experiments - our CAL lab lets you visualize drug effects and learn at your own pace. Embrace this revolution in learning and elevate your skills to new heights. At GIMSR, we're all about innovation, and our CAL lab is here to ignite your passion for pharmacology"
                }
                text={`Computer-Assisted Learning(CAL)`}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <AcademicCards
                image={"/Images/patho.png"}
                text="Pathology Museum"
                hover={
                  "Explore the intriguing world of diseases and medical conditions at GIMSR's Pathology Museum - a medical investigation and discovery hub. Immerse yourself in a vast collection of pathological specimens and real- life case studies. Our museum takes a hands- on approach to learning, enabling you to analyze and interpret pathological findings with precision. From rare conditions to common ailments, the Pathology Museum offers an immersive experience"
                }
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <AcademicCards
                image={"/Images/anatomy.png"}
                text="Anatomy Museum"
                hover={
                  "Step into the realm of medical education like never before and explore the marvels of human anatomy at GIMSR's Anatomy Museum -a treasure trove of knowledge and exploration. Immerse yourself in the intricacies of the human body, surrounded by meticulously preserved specimens and captivating exhibits. The museum offers a unique and immersive learning experience, seamlessly blending theory with real-life anatomy. Gain a profound understanding of the human form with interactive displays and expert guidance"
                }
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Academics;
