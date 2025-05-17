import { Toolbar, AppBar, Typography, Button } from "@mui/material";

import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <AppBar position="static" style={{background:'purple',}}>
        <Toolbar >
          <Typography variant="h5">Blog App</Typography>
          <Link to="/" style={{ marginLeft: "auto" }}>
            
              
              <Button color="inherit" style={{ color: 'white' }}>HOME</Button>
           
            </Link>
            <Link to="/add" style={{ marginLeft: "10px" }}>
            
              
              <Button color="inherit" style={{ color: 'white' }}>ADD</Button>
           
            </Link>
          
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
