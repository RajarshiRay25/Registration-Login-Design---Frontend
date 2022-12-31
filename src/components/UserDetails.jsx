import React, { Component } from 'react'
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default class UserDetails extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextPage();
    };
    render() {
        const { values, handleChange } = this.props;
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
                            User Detail Form
                        </Typography>
                    </Toolbar>
                </AppBar>
                <br />

                {/* Text Fields */}
                
                <TextField placeholder='First Name' variant="outlined" onChange={handleChange("name")} defaultValue={values.name} sx={{ m: '2px 10%', width: '30vw', }} />
                <br />
                <TextField placeholder='Last Name' variant="outlined" onChange={handleChange("surname")} defaultValue={values.surname} sx={{ m: '2px 10%', width: '30vw', }} />
                <br />
                <TextField placeholder='E-Mail' variant="outlined" onChange={handleChange("email")} defaultValue={values.email} sx={{ m: '2px 10%', width: '30vw', }} />
                <br />
                <Button
                    color="primary"
                    variant="contained"
                    onClick={this.continue}
                >Continue</Button>
            </Box>
        )
    }
}
