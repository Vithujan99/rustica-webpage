import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./Components/List";
import "./App.css";

function App() {
  return (
    <div className="main">
      <h1>React Search</h1>
      <div className="search">
        <TextField id="outlined-search" label="Search field" type="search" />
      </div>
      <List />
    </div>
  );
}

export default App;
