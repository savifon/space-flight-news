import React, { useContext, useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { AppContext } from "../../context";

const Filter = () => {
  const { handleSort } = useContext(AppContext);
  const [sort, setSort] = useState("desc");

  const handleOption = (value) => {
    setSort(value);
    handleSort(value);
  };

  return (
    <FormControl sx={{ width: "20ch" }} variant="outlined">
      <InputLabel size="small" id="demo-simple-select-label">
        Sort
      </InputLabel>
      <Select
        size="small"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={sort}
        label="Sort"
        onChange={(e) => handleOption(e.target.value)}
      >
        <MenuItem value="asc">Mais antigas</MenuItem>
        <MenuItem value="desc">Mais novas</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Filter;
