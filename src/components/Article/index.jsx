import React, { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";

import ArticleModal from "../ArticleModal";

const Article = ({ article, index }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Grid
        container
        flexDirection={index % 2 !== 0 && "row-reverse"}
        sx={{ flexWrap: "nowrap", gap: "20px", mb: 10 }}
      >
        <Grid item xs={4}>
          <Box
            sx={{
              width: "100%",
              height: 250,
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <img
              src={article.imageUrl}
              alt={article.title}
              style={{ position: "absolute", height: "100%" }}
            />
          </Box>
        </Grid>

        <Grid
          item
          xs={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "10px",
          }}
        >
          <Typography variant="h4" component="h3">
            {article.title}
          </Typography>

          <Grid container sx={{ justifyContent: "space-between" }}>
            <Grid item>
              <Typography component="p">{article.publishedAt}</Typography>
            </Grid>
            <Grid item>
              <Chip
                label={article.newsSite}
                variant="outlined"
                color="primary"
                size="small"
              />
            </Grid>
          </Grid>

          <Typography component="p">{article.summary}</Typography>
          <Button onClick={handleOpen} variant="contained">
            Ver mais
          </Button>
        </Grid>
      </Grid>

      <ArticleModal article={article} open={open} handleClose={handleClose} />
    </>
  );
};

export default Article;
