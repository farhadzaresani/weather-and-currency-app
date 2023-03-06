import * as React from "react";
import TextField from "@mui/material/TextField";
import { MyPaper } from "./CustomComponents";

export default function SearchInput({ location, setLocation, searchLocation }) {
  return (
    <MyPaper>
      <TextField
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyDown={searchLocation}
        fullWidth
        label='Location'
      />
    </MyPaper>
  );
}
