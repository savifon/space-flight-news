import React, { useEffect, useState } from "react";
import "./App.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import Header from "./components/Header";
import { getArticles } from "./services/api";
import ArticleList from "./components/ArticleList";

const theme = createTheme({
  palette: {
    mode: "light",
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
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async () =>
      await getArticles("desc", "", "", "").then((response) => {
        setArticles(response.data);
      }))();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <ArticleList articles={articles} />
    </ThemeProvider>
  );
}

export default App;
