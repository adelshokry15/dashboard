import { Box, Typography } from "@mui/material";
import React from "react";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb={"50px"} mt={"20px"}>
      <Typography
        variant="h2"
        fontWeight={"bold"}
        sx={{ mb: "5px" }}
        color={colors.grey[100]}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        fontWeight={"medium"}
        color={colors.greenAccent[400]}
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
