import React from 'react';
import {Button, View, Text} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import {Card} from "react-native-elements"
import Item from "./ItemComponent";

function Highlights(props) {
    return(
        <View>
            <Card   
                featuredTitle="Hilights title"
                image={{uri: ".\assets\adaptive-icon.png"}}
            >
                <Text style={{margin: 10}}>This is the highlights master component</Text>
            </Card>
            <Button
                title="Go to Item"
                onPress={() => props.navigation.navigate("Item")}
            />
        </View>
    )
}
export default Highlights;