import { Typography } from "@mui/material";
import React from "react";
import { MyBox, MyPaper } from "./CustomComponents";

const Content = ({ data }) => {
  return (
    <>
      {data.name !== undefined && (
        <MyPaper className='bottom'>
          <MyBox className='feels'>
            <Typography variant='p'>Feels Like:</Typography>
            {data.main ? (
              <Typography variant='p' className='bold'>
                {data.main.feels_like.toFixed()}°F
              </Typography>
            ) : null}
          </MyBox>
          <MyBox className='humidity'>
            <Typography variant='p'>Humidity:</Typography>
            {data.main ? (
              <Typography variant='p' className='bold'>
                {data.main.humidity}%
              </Typography>
            ) : null}
          </MyBox>
          <MyBox className='wind'>
            <Typography>Wind Speed:</Typography>
            {data.wind ? (
              <Typography variant='p' className='bold'>
                {data.wind.speed.toFixed()} MPH
              </Typography>
            ) : null}
          </MyBox>
        </MyPaper>
      )}
    </>
  );
};

export default Content;
