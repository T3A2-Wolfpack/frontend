import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export default function StarRating({starValue, setStarValue}) {
  
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={starValue}
        onChange={(event, newValue) => {
          setStarValue(newValue);
        }}
      />
      {console.log(starValue)}
    </Box>
  );
}
