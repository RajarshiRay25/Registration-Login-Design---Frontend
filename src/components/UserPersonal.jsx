import React, { Component } from 'react'
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default class UserPersonal extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextPage();
    };
    previous = (e) => {
        e.preventDefault();
        this.props.prevPage();
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
                            User Personal Data
                        </Typography>
                    </Toolbar>
                </AppBar>
                <br />
                {/* Text Fields */}
                
                <TextField placeholder='Occupation' variant="outlined" onChange={handleChange("occupation")} defaultValue={values.occupation} sx={{ m: '2px 10%', width: '30vw', }} />
                <br />
                <TextField placeholder='Location' variant="outlined" onChange={handleChange("location")} defaultValue={values.location} sx={{ m: '2px 10%', width: '30vw', }} />
                <br />
                <TextField placeholder='About You' variant="outlined" onChange={handleChange("about")} defaultValue={values.about} sx={{ m: '2px 10%', width: '30vw', }} />
                <br />
                <Button
                    color="primary"
                    variant="contained"
                    onClick={this.continue}
                    style={{
                        margin:"10px 10%"
                    }}
                >Continue</Button>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={this.previous}
                    style={{
                        margin:"10px 10%"
                    }}
                >Back</Button>
            </Box>
        )
    }
}
