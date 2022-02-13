import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";

import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";

import { AppContext } from "../../context";

const Search = () => {
  const { handleContains } = useContext(AppContext);
  const [contains, setContains] = useState("");
  const navigate = useNavigate();

  const handleSearch = (value) => {
    handleContains(value);
    navigate(`?contains=${contains}`);
  };

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
          onKeyDown={(e) => e.keyCode === 13 && handleSearch(contains)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="search article"
                onClick={() => handleSearch(contains)}
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
