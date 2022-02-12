import React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Article from "../Article";

const ArticleList = ({ articles }) => {
  return (
    <Container maxWidth="md">
      <Box>
        {articles.map((article, index) => (
          <Article article={article} index={index} key={article.id} />
        ))}
      </Box>
    </Container>
  );
};

export default ArticleList;
