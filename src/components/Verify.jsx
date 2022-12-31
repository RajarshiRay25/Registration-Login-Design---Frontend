import React, { Component } from 'react'
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default class Verify extends Component {
  render() {
    return (
        <Box
                component="form"
                sx={{ m: '2px 31%', width: '50vw', }}
                noValidate
                autoComplete="off"
                maxWidth='sm'
            >
                <AppBar position="static" sx={{ alignItems: 'center' }}>
                    <Toolbar>
                        <Typography variant="h6" component="div" >
                            Verified!!!
                        </Typography>
                    </Toolbar>
                </AppBar>
                <br />
                <h1>REGISTRATION SUCCESSFULL!!</h1>

        </Box>
    )
  }
}
