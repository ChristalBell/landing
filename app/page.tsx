import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import Email from "@/components/Email";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        margin: "8rem",
      }}
    >
      <Typography variant="h1"> Elevation Experience Logo</Typography>

      <Typography
        className="header"
        variant="h3"
        sx={{
          color: "lightGrey",
          fontWeight: "light",
          marginTop: "3rem",
          marginBottom: "1.75rem",
        }}
      >
        We are launching
        <span style={{ fontWeight: "800", color: "navy" }}> soon!</span>
      </Typography>
      <Typography
        className="subscribe"
        sx={{ fontSize: "1.25rem", marginBottom: "2.5rem" }}
      >
        Subscribe and get notified
      </Typography>
      <Email />
    </Box>
  );
};

export default Home;
