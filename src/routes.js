import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import ArticleList from "./components/ArticleList";

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ArticleList />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
