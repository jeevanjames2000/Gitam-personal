import React from "react";
import { Typography } from "@mui/material";

const HighlightsCard = ({
  backgroundColor,
  iconSrc,
  title,
  value,
  description,
  height, // Added height prop to set fixed height
}) => {
  return (
    <div
      style={{
        border: "2px solid #007367",
        borderRadius: "10px",
        backgroundColor: backgroundColor || "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        height: height || "100%", // Apply height prop or default to '100%'
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {iconSrc && (
          <img
            src={iconSrc}
            alt={title}
            style={{ width: "100px", height: "100px" }}
          />
        )}
        <Typography
          style={{
            color: backgroundColor ? "#fff" : "#007367",
            textAlign: "center",
            marginTop: "0.5rem",
            fontWeight: "700",
            fontSize: "26px",
          }}
        >
          {value}
        </Typography>
        <Typography
          style={{
            color: backgroundColor ? "#fff" : "#007367",
            textAlign: "center",
            fontWeight: "400",
            fontSize: "16px",
          }}
        >
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default HighlightsCard;
