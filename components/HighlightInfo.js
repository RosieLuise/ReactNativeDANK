import React from 'react';
import {Button, View, Text, Image, ScrollView} from "react-native";
import {Card} from "react-native-elements"

function HighlightInfo({route}) {
    const item = route.params.item;
    return(
        <ScrollView>
            <Card containerStyle={{padding: 10, alignContent: "center", justifyContent: "center"}}>
                <Card.Title>{item.name}</Card.Title>
                <Text style={{padding: 0, textAlign: "center", width: "100%"}}>{item.date}</Text>
                <Image 
                    source={item.altImage}
                    style={{width: "100%"}}
                />
                <Text>{item.details}</Text>
            </Card>
        </ScrollView>
    )
}
export default HighlightInfo;