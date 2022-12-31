import React, { Component } from 'react'
import UserDetails from './UserDetails';
import UserPersonal from './UserPersonal';
import Confirm from './Confirm';
import Verify from './Verify';
export default class Form extends Component {
    state={
        page: 1,
        name: "",
        surname: "",
        email: "",
        occupation: "",
        location: "",
        about: "",
    };

    // go next page of form

    nextPage =()=>{
        const{page} = this.state;
        this.setState({
            page: page+1,
        });
    };

    // go previous page of form

    prevPage =()=>{
        const{page} = this.state;
        this.setState({
            page:page-1,
        });
    };

    // create handle change 

    handleChange = input => (e) =>{
        this.setState({ [input]: e.target.value});
    }


  render() {
    const {page} = this.state;
    const{name,surname,email,occupation,location,about} = this.state;

    const values = {name,surname,email,occupation,location,about};

    switch(page){
        
        // switch case 
        
        case 1:  
            return(
                <UserDetails
                nextPage={this.nextPage}
                handleChange={this.handleChange}
                values={values}
                />
            );
        case 2:
            return(
                <UserPersonal
                prevPage={this.prevPage}
                nextPage={this.nextPage}
                handleChange={this.handleChange}
                values={values}
                />
            );
        case 3:
            return(
                <Confirm
                prevPage={this.prevPage}
                nextPage={this.nextPage}
                values={values}
                />
            );
        case 4:
            return (
                <Verify/>
            )
        default:
            (console.log("DONE"))
    }
  }
}
