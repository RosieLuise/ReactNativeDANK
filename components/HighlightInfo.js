import React from 'react';
import {Button, View, Text, Image, ScrollView} from "react-native";
import {Card} from "react-native-elements"

function HighlightInfo({route}) {
    const item = route.params.item;
    return(
        <ScrollView>
            <Card containerStyle={{padding: 0, justifyContent: "center"}}>
                <Card.Title>{item.name}</Card.Title>
                <Image 
                    source={item.altImage}
                    style={{}}
                />
            </Card>
        </ScrollView>
    )
}
export default HighlightInfo;