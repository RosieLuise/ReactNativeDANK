import React from 'react';
import {View, Text} from "react-native";
import {Card} from "react-native-elements"

function Home() {
    return(
        <Card   
            featuredTitle="Home title"
            image={{uri: "../assets/favicon.png"}}
        >
            <Text style={{margin: 10}}>This is the home component</Text>
        </Card>
    )
}
export default Home;