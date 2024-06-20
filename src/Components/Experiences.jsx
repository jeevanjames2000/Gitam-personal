import { Grid, Typography, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import SwipeableViews from "react-swipeable-views";

const Experiences = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const items = [
    {
      image: "/Images/Untitled.png",
      name: "Dr.Likitha",
      description:
        "To be eligible for MBBS admission, candidates must be at least 17 years old on or before 31st December of the admission year and have completed their intermediate / H.S.C / +2 or equivalent with English, Physics, Chemistry, and Biology/Botany & Zoology, meeting the minimum marks required by the National Medical Council (NMC). Additionally, they must qualify the undergraduate National Eligibility cum Entrance Test (NEET) with the score prescribed by the National Medical Council (NMC).",
    },
    {
      image: "/Images/Untitled.png",
      name: "Dr.Likitsdsdha",
      description:
        "To be eligible for MBBS admission, candidates must be at least 17 years old on or before 31st December of the admission year and have completed their intermediate / H.S.C / +2 or equivalent with English, Physics, Chemistry, and Biology/Botany & Zoology, meeting the minimum marks required by the National Medical Council (NMC). Additionally, they must qualify the undergraduate National Eligibility cum Entrance Test (NEET) with the score prescribed by the National Medical Council (NMC).",
    },
  ];

  useEffect(() => {
    const id = setInterval(() => {
      nextItem();
    }, 5000);
    setIntervalId(id);

    return () => clearInterval(intervalId);
  }, [currentIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  const nextItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handlePrevClick = () => {
    clearInterval(intervalId);
    prevItem();
  };

  const handleNextClick = () => {
    clearInterval(intervalId);
    nextItem();
  };

  return (
    <Grid
      container
      justifyContent="center"
      spacing={2}
      style={{
        backgroundColor: "#DDDD",
        paddingTop: "2rem",
        paddingBottom: "2rem",
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
            marginBottom: "1rem",
          }}
        >
          GIMSR Experiences
        </Typography>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: "2rem" }}
      >
        <Grid
          item
          xs={1}
          style={{
            display: "flex",
            justifyContent: "flex-start",
            paddingRight: "1rem",
          }}
        >
          <img
            src="/Images/Frame 78.svg"
            alt="left"
            style={{ width: "50px", cursor: "pointer" }}
            onClick={handlePrevClick}
          />
        </Grid>
        <Grid
          item
          xs={10}
          sm={8}
          md={6}
          style={{
            border: "2px solid #fff",
            borderRadius: "20px",
            backgroundColor: "#fff",
          }}
        >
          <SwipeableViews
            index={currentIndex}
            onChangeIndex={(index) => setCurrentIndex(index)}
            enableMouseEvents
          >
            {items.map((item, index) => (
              <Grid
                key={index}
                container
                justifyContent="center"
                spacing={2}
                style={{
                  padding: "1rem",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Grid item xs={12} sm={5}>
                  <div
                    style={{
                      borderRadius: "20px",
                      backgroundColor: "#ffffff",
                      boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        borderRadius: "20px 20px 0 0",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={item.image}
                        alt="academics"
                        style={{
                          width: "100%",
                          height: "auto",
                          objectFit: "cover",
                          borderRadius: "20px 20px 0 0",
                          display: "block",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        backgroundColor: "#fff",
                        borderRadius: "0 0 20px 20px",
                        padding: "1rem",
                        textAlign: "center",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        variant="h6"
                        style={{
                          color: "#007367",
                          fontWeight: "700",
                          fontSize: "16px",
                          lineHeight: "1.5",
                          margin: "0",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {item.name}
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} sm={7}>
                  <Typography variant="body2" style={{ textAlign: "left" }}>
                    {item.description}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </SwipeableViews>
        </Grid>

        <Grid
          item
          xs={1}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingLeft: "1rem",
          }}
        >
          <img
            src="/Images/Frame 77.png"
            alt="Right"
            style={{ width: "50px", cursor: "pointer" }}
            onClick={handleNextClick}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Experiences;
