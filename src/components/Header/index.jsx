import React from "react";

import Search from "../Search";
import Filter from "../Filter";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

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
        backgroundImage:
          "url(https://img.freepik.com/free-vector/gradient-galaxy-background_23-2148983655.jpg?w=1380)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.5)",
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
        sx={{ minHeight: "40vh" }}
      >
        <Grid item position="relative" mt={6}>
          <img
            width="100px"
            src="https://img.freepik.com/free-vector/rocket-background-flat-style_23-2147904992.jpg?w=826"
            alt="rocket-background-flat-style"
          />
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
