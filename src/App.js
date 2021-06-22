import React from "react";
import {AppBar, IconButton, Typography} from "@material-ui/core";
import { Toolbar } from '@material-ui/core';
import Menu from '@material-ui/icons/Menu';
import SimpleCard from './Home/Card'
import BottomCard from './Home/BottomCard'

function App() {
  return (
    <div className="App">
      <AppBar position="sticky">
      <Toolbar>
        <IconButton aria-label="app" color="inherit">
          <Menu />
        </IconButton>
        <Typography variant="h6">Betting</Typography>
      </Toolbar>
      </AppBar>
      <SimpleCard/>
      <BottomCard paddingBottom={2}/>
    </div>
  );
}

export default App;
