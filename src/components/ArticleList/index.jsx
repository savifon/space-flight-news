import React, { useContext } from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import Article from "../Article";
import { AppContext } from "../../context";

const ArticleList = () => {
  const { articles, handleNextPage } = useContext(AppContext);

  return (
    <Container maxWidth="md">
      <Box>
        {articles?.length ? (
          <>
            {articles.map((article, index) => (
              <Article article={article} index={index} key={article.id} />
            ))}
            <Button onClick={handleNextPage} variant="contained">
              Carregar Mais
            </Button>
          </>
        ) : (
          <Typography component="p">Aguarde, carregando...</Typography>
        )}
      </Box>
    </Container>
  );
};

export default ArticleList;
