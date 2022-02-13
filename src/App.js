import React from "react";
import "./App.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { AppProvider } from "./context";
import AppRoutes from "./routes";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: "#d98c45",
      main: "#D07017",
      dark: "#914e10",
      contrastText: "#FFF",
    },
    secondary: {
      light: "#595775",
      main: "#302E53",
      dark: "#21203a",
      contrastText: "#FFF",
    },
  },
  typography: {
    fontFamily: ["Roboto Condensed", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
