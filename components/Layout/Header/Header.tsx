import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar>
      <Toolbar sx={{ textAlign: "center" }}>
        <Typography variant="h5" component="div" sx={{ width: "100%" }}>
          SPACEX CHALLENGE
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
