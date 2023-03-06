import { Box, Typography } from "@mui/material";
import React from "react";
import { MyPaper } from "./CustomComponents";

const TopSection = ({ data }) => {
  return (
    <MyPaper className='top'>
      <Box className='location'>
        <Typography variant='h2'>{data.name}</Typography>
      </Box>
      <Box className='temp'>
        {data.main ? (
          <Typography variant='h3'>{data.main.temp.toFixed()}°F</Typography>
        ) : null}
      </Box>
      <Box className='description'>
        {data.weather ? (
          <Typography variant='h5'>{data.weather[0].main}</Typography>
        ) : null}
      </Box>
    </MyPaper>
  );
};

export default TopSection;
