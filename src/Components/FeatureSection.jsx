import React, { useState } from "react";
import "./Styles/FeatureSection.css";
import {
  Grid,
  TextField,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
const FeaturesSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    neetRoll: "",
    neetRank: "",
    score: "",
    checked: false,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleCheckboxChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      checked: e.target.checked,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <Grid
      container
      justifyContent="center"
      style={{
        // height: "auto",
        backgroundColor: "#ffff",
      }}
    >
      {}
      <Grid
        item
        container
        xs={10}
        sm={8}
        md={8}
        alignItems="center"
        display={"flex"}
        justifyContent={"start"}
      >
        <Grid item xs={12} md={6} style={{ paddingRight: "1rem" }}>
          <Typography
            variant="h2"
            sx={{
              color: "#007367",
              fontWeight: 700,
              fontSize: "32px",
              lineHeight: "32px",
              textAlign: "left",
              marginBottom: "1rem",
            }}
          >
            GITAM Institute of Medical Sciences and Research (GIMSR)
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#2D2D2D",
              fontWeight: 400,
              lineHeight: "24px",
              textAlign: "left",
            }}
          >
            Discover GIMSR, your gateway to excellence in medical education!
            Established in 2015, we are the first deemed medical college in
            Andhra Pradesh, nestled alongside the picturesque GITAM (Deemed to
            be University) campus in Visakhapatnam. With 600 undergraduate
            students and post-graduate programmes in 12 clinical and 2
            para-Clinical disciplines, we offer top-notch medical education,
            attracting students from all corners of India and beyond. Our serene
            environment and modern amenities foster the growth of outstanding
            medical professionals. Benefit from strong academic and research
            linkages within GITAM Deemed to be University, providing incredible
            opportunities for learning and research. Explore our sprawling
            campus with state-of-the-art facilities, including museums,
            libraries, and sports facilities. Begin an exciting journey towards
            becoming an exceptional medical professional at GIMSR!
          </Typography>
        </Grid>
        {}
        <Grid
          item
          container
          xs={12}
          md={6}
          display="flex"
          justifyContent="flex-end"
          sx={{
            border: "2px solid #ccc",
            borderRadius: "20px",
            padding: "2rem",
            height: "auto",
            backgroundColor: "#fff",
            maxWidth: "100%",
            position: "relative",
            top: "40%",
            transform: "translateY(-50%)",
            zIndex: 1,
          }}
        >
          <Grid item xs={12}>
            <Typography
              variant="h6"
              style={{
                textAlign: "center",
                color: "#007367",
                fontWeight: "700",
                fontSize: "16px",
                marginBottom: "1rem",
              }}
            >
              Download Brochure
            </Typography>
            {}
            <Grid
              item
              xs={12}
              sx={{
                marginBottom: "1rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TextField
                fullWidth
                variant="outlined"
                id="name"
                name="name"
                label="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ height: "34px", width: "480px", marginBottom: "1rem" }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                marginBottom: "1rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TextField
                fullWidth
                variant="outlined"
                id="email"
                name="email"
                type="email"
                label="Email"
                value={formData.email}
                onChange={handleChange}
                style={{ height: "34px", width: "480px", marginBottom: "1rem" }}
                required
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                marginBottom: "1rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TextField
                fullWidth
                variant="outlined"
                id="phone"
                name="phone"
                label="Phone Number"
                value={formData.phone}
                style={{ height: "34px", width: "480px", marginBottom: "1rem" }}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                marginBottom: "1rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TextField
                fullWidth
                variant="outlined"
                id="city"
                name="city"
                label="City"
                value={formData.city}
                style={{ height: "34px", width: "480px", marginBottom: "1rem" }}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                marginBottom: "1rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TextField
                fullWidth
                variant="outlined"
                id="neet_roll"
                name="neetRoll"
                label="NEET Roll No"
                value={formData.neetRoll}
                style={{ height: "34px", width: "480px", marginBottom: "1rem" }}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                marginBottom: "1rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TextField
                fullWidth
                variant="outlined"
                id="neet_rank"
                name="neetRank"
                label="NEET 2024 Rank"
                value={formData.neetRank}
                style={{ height: "34px", width: "480px", marginBottom: "1rem" }}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                marginBottom: "1rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TextField
                fullWidth
                variant="outlined"
                id="score"
                name="score"
                label="NEET Score"
                value={formData.score}
                style={{ height: "34px", width: "480px", marginBottom: "1rem" }}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                marginBottom: "1rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TextField
                type="file"
                variant="outlined"
                fullWidth
                id="scorecard"
                name="scorecard"
                style={{ height: "34px", width: "480px", marginBottom: "1rem" }}
                accept="image/png, image/jpeg, image/jpg, .pdf"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                marginBottom: "1rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    id="checking"
                    name="checking"
                    value="Yes"
                    onChange={handleCheckboxChange}
                  />
                }
                style={{ textAlign: "justify", height: "auto", width: "480px" }}
                label="By clicking the ‘Submit' button, you consent to receive communication from us such as our newsletters, updates, new programme releases, etc via email, SMS, WhatsApp, and voice call. GITAM (Deemed to be University) is committed to protecting the privacy of the visitor and user's personal information. The information you provide will not be sold, rented, given away or traded to any third party not engaged by GITAM to perform authorized services. You may opt-out at any time."
              />
            </Grid>
            <Grid
              item
              container
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              xs={12}
              style={{
                marginTop: "1rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: "#007367",
                  color: "#ffff",
                  width: "120px",
                }}
                className="cta-btn btn btn-lg btn-block"
                id="submit_btn"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default FeaturesSection;
