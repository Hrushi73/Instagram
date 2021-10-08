import React from "react";
import Navbar from "../Navbar/Navbar";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const AllComments = () => {
  return (
    <div>
      <Navbar />
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          hi
          <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>height</Box>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default AllComments;
