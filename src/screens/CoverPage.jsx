import * as React from "react";
import { Button, Typography } from "@mui/material";
import CoverLayout from "../Components/CoverLayout";
import { useNavigate } from "react-router-dom";

const backgroundImage =   
  "https://images.unsplash.com/photo-1639815188546-c43c240ff4df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80";

export default function CoverPage() {   
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("home button clicked");
    navigate("/home");
    window.location.reload();
  };

  return (
    <CoverLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Blockchain Based Voting System
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        A decentralized voting system that is built on the Ethereum blockchain.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        sx={{ minWidth: 200 }}
        onClick={handleClick}
      >
        Enter the Voting System     
      </Button>
    </CoverLayout>
  );
}