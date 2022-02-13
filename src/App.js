import React from "react";
import "./App.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import { AppProvider } from "./context";

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
        <Header />
        <ArticleList />
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
