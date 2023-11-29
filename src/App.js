import React from "react";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";
import "./App.css";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

function App() {
  return (
    // BEM
    <div className="app">
      <Grid container>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={5}>
          <Feed />
        </Grid>
        <Grid item xs={4}>
          <Widgets />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
