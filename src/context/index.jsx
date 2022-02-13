import React, { createContext, useEffect, useState } from "react";

import { getArticles } from "../services/api";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const queryParams = new URLSearchParams(window.location.search);

  const limit = 10;
  const [start, setStart] = useState(0);
  const [sort, setSort] = useState("desc");
  const [contains, setContains] = useState(queryParams.get("contains"));
  const [articles, setArticles] = useState([]);
  const [displayNextPage, setDisplayNextPage] = useState(true);
  const [loading, setLoading] = useState(true);

  const handleNextPage = () => {
    const newStart = start + limit;
    setStart(newStart);
  };

  const handleSort = (sort) => {
    setSort(sort);
  };

  const handleContains = (contains) => {
    setLoading(true);
    setArticles([]);
    setStart(0);
    setContains(contains);
  };

  useEffect(() => {
    (async () =>
      await getArticles(sort, contains, limit, start).then((response) => {
        if (response.data.length) {
          const currentArticles = articles.length
            ? [].concat(articles, response.data)
            : response.data;
          setArticles(currentArticles);
        } else {
          setDisplayNextPage(false);
        }
        setLoading(false);
      }))();
  }, [sort, contains, limit, start]);

  return (
    <AppContext.Provider
      value={{
        loading,
        articles,
        handleNextPage,
        handleSort,
        handleContains,
        displayNextPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext };
