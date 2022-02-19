import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{height:"50px"}} position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Covid-19 Tracker
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
