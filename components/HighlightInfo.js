import React from 'react';
import {Button, View, Text} from "react-native";
import {Card} from "react-native-elements"

function HighlightInfo(props) {
    return(
        <View>
            <Card   
                featuredTitle="Item title"
                image={{uri: ".\assets\adaptive-icon.png"}}
            >
                <Text style={{margin: 10}}>This is a specific highlight item component</Text>
            </Card>
        </View>
    )
}
export default HighlightInfo;