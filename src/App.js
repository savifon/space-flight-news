import React, { useEffect } from "react";
import "./App.css";

import Header from "./components/Header";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { getArticles } from "./services/api";

function App() {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  useEffect(() => {
    handleArticles();
  }, []);

  const handleArticles = async () => {
    await getArticles("desc", "", "", "").then((response) => {
      console.log(response.data);
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
