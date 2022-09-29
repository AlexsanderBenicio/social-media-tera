import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppBar from "../molecules/AppBar";
import Toolbar from "../molecules/Toolbar";
import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";
import LinkGroup from "../organisms/LinkGroup";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: purple[700],
    },
  },
});

function AppHeader() {
  return (
    <div>
      <AppBar theme={theme} position="fixed">
        <Toolbar color="primary" sx={{ justifyContent: "space-between" }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="white"
            href="/"
            sx={{ fontSize: 30 }}
          >
            {"Social Media Tera"}
          </Link>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <LinkGroup />
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppHeader;
