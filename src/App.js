import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Header from "./components/Header/Header";

function App() {
  const [title, setTitle] = useState(null);
  const location = useLocation();
  useEffect(() => {
    // console.log("location", location.pathname);
    const parsedTitle = location.pathname.replace(/\W/g, " ");
    setTitle(parsedTitle);
  }, [location]);
  return (
    <Grid container>
      <Navbar />
      <Header title={title} />
      <Outlet />
    </Grid>
  );
}

export default App;
