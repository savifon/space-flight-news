import React from "react";

import Search from "../Search";
import Filter from "../Filter";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import logo from "../../assets/logo.svg";
import bgheader from "../../assets/bgheader.jpg";

const Header = () => {
  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        mb: 10,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${bgheader})`,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.6)",
        }}
      />
      <Grid
        container
        sx={{
          p: 2,
          maxWidth: { xs: "95vw", md: "80vw" },
          direction: "row",
          gap: "10px",
          alignItems: "center",
          justifyContent: { xs: "center", md: "flex-end" },
        }}
      >
        <Search />
        <Filter />
      </Grid>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "50vh" }}
      >
        <Grid item position="relative" mt={6}>
          <img width="150px" src={logo} alt="rocket-background-flat-style" />
        </Grid>
        <Grid item>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              sx={{ textAlign: "center" }}
            >
              Space Flight News
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Header;
