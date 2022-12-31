import React, { Component } from 'react'
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default class Confirm extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextPage();
    };
    previous = (e) => {
        e.preventDefault();
        this.props.prevPage();
    };
    render() {
           const{
             values: { name, surname, email, occupation, location, about } } = this.props;
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

                <List>
                    <ListItem>
                        <ListItemText primary="First Name" secondary={name} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Last Name" secondary={surname} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="E-Mail" secondary={email} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Occupation" secondary={occupation} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Location" secondary={location} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="About" secondary={about} />
                    </ListItem>
                </List>
                <br />
                <Button
                    color="primary"
                    variant="contained"
                    onClick={this.continue}
                    style={{
                        margin:"10px 10%"
                    }}
                >Confirm Changes</Button>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={this.previous}
                    style={{
                        margin:"10px 10%"
                    }}
                >Back To Edit</Button>

            </Box>
        )
    }
}
