import React from "react";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const Filter = ({ children }) => {
  return (
    <FormControl sx={{ width: "20ch" }} variant="outlined">
      <InputLabel size="small" id="demo-simple-select-label">
        Sort
      </InputLabel>
      <Select
        size="small"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value=""
        label="Sort"
        onChange={() => console.log("selecionou....", this.value)}
      >
        <MenuItem value="ASC">Mais antigas</MenuItem>
        <MenuItem value="DESC">Mais novas</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Filter;
