import React from "react";
import { Box, CircularProgress, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Progress = ({ progress }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        background: `radial-gradient(${colors.primary[400]} 50%,transparent 56%),conic-gradient(${colors.greenAccent[500]} 0deg ${progress}deg, ${colors.blueAccent[500]} ${progress}deg 360deg )`,
        borderRadius: "50%",
        width: "80px",
        height: "80px",
      }}
    ></Box>
  );
};

export default Progress;
