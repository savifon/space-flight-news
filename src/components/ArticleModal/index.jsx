import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import styled from "@mui/system/styled";
import ModalUnstyled from "@mui/base/ModalUnstyled";

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: #302e53d9;
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: "80vw",
  maxWidth: "900px",
  bgcolor: "background.paper",
  border: "2px solid #D07017",
  px: 5,
  py: 10,
};

const ArticleModal = ({ article, open, handleClose }) => {
  return (
    <StyledModal
      aria-labelledby="unstyled-modal-title"
      aria-describedby="unstyled-modal-description"
      open={open}
      onClose={handleClose}
      BackdropComponent={Backdrop}
    >
      <Box sx={style}>
        <Grid container sx={{ flexWrap: "nowrap", gap: "20px" }}>
          <Grid item xs={5}>
            <img
              src={article.imageUrl}
              alt={article.title}
              style={{ maxWidth: "100%" }}
            />
          </Grid>

          <Grid
            item
            xs={7}
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

            <Typography component="p">{article.publishedAt}</Typography>

            <Typography component="p">{article.summary}</Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 5,
          }}
        >
          <Button href={article.url} target="_blank" variant="contained">
            Ir para o site
          </Button>
        </Box>
      </Box>
    </StyledModal>
  );
};

export default ArticleModal;
