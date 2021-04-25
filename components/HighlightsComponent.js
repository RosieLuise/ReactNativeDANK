import React from 'react';
import {Button, View, Text} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import {Card} from "react-native-elements"
import HighlightInfo from "./HighlightInfo";

function Highlights(props) {
    return(
        <View>
            <Card   
                featuredTitle="Highlights title"
                image={{uri: ".\assets\adaptive-icon.png"}}
            >
                <Text style={{margin: 10}}>This is the highlights master component</Text>
            </Card>
            <Button
                title="Go to Item"
                onPress={() => props.navigation.navigate("HighlightInfo")}
            />
        </View>
    )
}
export default Highlights;