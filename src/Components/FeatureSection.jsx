import React, { useState } from "react";
import "./Styles/FeatureSection.css";
import { Grid, TextField, Button, Typography } from "@mui/material";
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
      alignItems="center"
      style={{
        minHeight: "100%",
        backgroundColor: "#ffff",
        paddingTop: "4rem",
        paddingBottom: "4rem",
      }}
    >
      <Grid
        container
        display={"flex"}
        flexDirection={"column"}
        justifyContent="left"
        alignItems="left"
        spacing={2}
        xs={12}
        md={10}
        lg={8}
        style={{}}
      >
        <Grid item xs={6}>
          <Typography
            variant="h2"
            sx={{
              color: "#007367",
              fontWeight: 700,
              fontSize: "32px",
              lineHeight: "32px",
              marginBottom: "1.5rem",
              textAlign: "left",
            }}
          >
            GITAM Institute of Medical Sciences and Research (GIMSR)
          </Typography>
        </Grid>
        <Grid item xs={6}>
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
      </Grid>
      {/* <Grid item container xs={6} style={{display:'flex', justifyContent:'center'}}  className="form-container">
      <div className="form-wrap text-center details" id="form-area">
        <h6 className="heading-color">Download Brochure</h6>
        <form method="post" id="landing_form" noValidate="novalidate" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                id="name"
                name="name"
                label="Full Name*"
                value={formData.name}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                inputProps={{ maxLength: 50, pattern: "[A-Za-z ]{1,50}" }}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                id="email"
                name="email"
                type="email"
                label="Email*"
                value={formData.email}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                inputProps={{ maxLength: 50 }}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                id="phone"
                name="phone"
                label="Phone Number*"
                value={formData.phone}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                inputProps={{ maxLength: 10, pattern: "[0-9]{10}" }}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                id="city"
                name="city"
                label="City*"
                value={formData.city}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                inputProps={{ maxLength: 50, pattern: "[A-Za-z ]{1,50}" }}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                id="neet_roll"
                name="neetRoll"
                label="NEET Roll No*"
                value={formData.neetRoll}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                inputProps={{ maxLength: 100, pattern: "[0-9]{1,100}" }}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                id="neet_rank"
                name="neetRank"
                label="NEET 2024 Rank*"
                value={formData.neetRank}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                inputProps={{ maxLength: 100, pattern: "[0-9]{1,100}" }}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="outlined"
                id="score"
                name="score"
                label="NEET Score*"
                value={formData.score}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                inputProps={{ maxLength: 50, pattern: "[0-9]{1,50}" }}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="file"
                variant="outlined"
                fullWidth
                id="scorecard"
                name="scorecard"
                accept="image/png, image/jpeg, image/jpg, .pdf"
                className="form-control"
              />
            </Grid>
            <Grid item xs={12}>
              <div className="form-group">
                <div className="row align-checkbox">
                  <div className="col-12 checkbox-label">
                    <input
                      type="checkbox"
                      id="checking"
                      name="checking"
                      value="Yes"
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="checking">
                      By clicking the ‘Submit' button, you consent to receive
                      communication from us such as our newsletters, updates, new
                      programme releases, etc via email, SMS, WhatsApp, and voice
                      call. GITAM (Deemed to be University) is committed to
                      protecting the privacy of the visitor and user's personal
                      information. The information you provide will not be sold,
                      rented, given away or traded to any third party not engaged
                      by GITAM to perform authorized services. You may opt-out at
                      any time.
                    </label>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                className="cta-btn btn btn-lg btn-block"
                id="submit_btn"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Grid> */}
    </Grid>
  );
};
export default FeaturesSection;
