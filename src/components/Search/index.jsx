import React, { useState } from "react";

import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  const [contains, setContains] = useState("");

  return (
    <>
      <FormControl sx={{ width: "25ch" }} variant="outlined">
        <InputLabel htmlFor="search" size="small">
          Search
        </InputLabel>
        <OutlinedInput
          id="search"
          type="text"
          value={contains}
          size="small"
          onChange={(e) => setContains(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="search article"
                onClick={() => (window.location.href = `?contains=${contains}`)}
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
