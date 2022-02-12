import React, { createContext, useEffect, useState } from "react";

import { getArticles } from "../services/api";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const limit = 10;
  const [start, setStart] = useState(0);
  const [sort, setSort] = useState("desc");
  const [contains, setContains] = useState("");
  const [newArticles, setNewArticles] = useState([]);
  const [articles, setArticles] = useState([]);

  const handleNextPage = () => {
    const newStart = start + limit;
    setStart(newStart);
  };

  const handleSort = (sort) => {
    setSort(sort);
  };

  const handleContains = (contains) => {
    setContains(contains);
  };

  useEffect(() => {
    (async () =>
      await getArticles(sort, contains, limit, start).then((response) => {
        setArticles(response.data);
      }))();
  }, [sort, contains, limit, start]);

  return (
    <AppContext.Provider
      value={{ articles, handleNextPage, handleSort, handleContains }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext };
