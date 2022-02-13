import React, { useContext } from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

import Article from "../Article";
import { AppContext } from "../../context";

const ArticleList = () => {
  const { loading, articles, handleNextPage, displayNextPage } =
    useContext(AppContext);

  return (
    <Container maxWidth="md" sx={{ mb: 10 }}>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {loading ? (
          <CircularProgress />
        ) : articles.length ? (
          <>
            {articles.map((article, index) => (
              <Article article={article} index={index} key={article.id} />
            ))}
            {displayNextPage ? (
              <Button onClick={handleNextPage} variant="contained">
                Carregar Mais
              </Button>
            ) : (
              <Typography component="p">Fim dos resultados.</Typography>
            )}
          </>
        ) : (
          <Typography component="p">Não foram localizados artigos.</Typography>
        )}
      </Box>
    </Container>
  );
};

export default ArticleList;
