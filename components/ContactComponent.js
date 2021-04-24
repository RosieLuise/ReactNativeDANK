import React, {Component} from 'react';
import {View, Text} from "react-native";
import {Card} from "react-native-elements"

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    
    render() {
        return(
            <Card   
            featuredTitle="Contact title"
            image={{uri: "../assets/favicon.png"}}
        >
            <Text style={{margin: 10}}>This is the contact component</Text>
        </Card>
        )
    }
}
export default Contact;