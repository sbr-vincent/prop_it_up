import React from 'react';
import { Component } from 'react';


class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            personAge: parseInt(this.props.age)
        };
    }

    birthdayButton = () => {
        console.log("Age Bruh");
        this.setState({personAge: this.state.personAge + 1});
    }

    render(){
        const { firstName, lastName, hair_color } = this.props;
        return(
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.personAge} </p>
                <p>Hair Color: {hair_color}</p>
                <button onClick={ this.birthdayButton }>Birthday Button for {firstName} {lastName}</button>
            </div>
        )
    };

}

export default PersonCard;