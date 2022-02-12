import React from "react";

import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <>
      <FormControl sx={{ width: "25ch" }} variant="outlined">
        <InputLabel htmlFor="search" size="small">
          Search
        </InputLabel>
        <OutlinedInput
          id="search"
          type="text"
          value=""
          size="small"
          onChange={() => console.log("digitou.....")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="search article"
                onClick={() => console.log("pesquisou.....")}
                edge="end"
                size="small"
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
          label="Search"
          color="secondary"
        />
      </FormControl>
    </>
  );
};

export default Search;
