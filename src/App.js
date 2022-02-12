import React, { useEffect } from "react";

import Header from "./components/Header";
import Search from "./components/Search";
import Filter from "./components/Filter";

import { getArticles } from "./services/api";

function App() {
  useEffect(() => {
    handleArticles();
  }, []);

  const handleArticles = async () => {
    await getArticles("desc", "", "", "").then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div className="App">
      <Header>
        <h1>Space Flight News</h1>
        <Search />
        <Filter />
      </Header>
    </div>
  );
}

export default App;
