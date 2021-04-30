import React from 'react';
import {Button, View, Text, FlatList} from "react-native";
import {Card, ListItem, Tile} from "react-native-elements"
import {HIGHLIGHTS} from "../shared/highlights";

function Highlights({navigation}) {
    const renderHighlight = ({item}) => {
        return (
            <Tile 
                title={item.name}
                imageSrc={item.image}    
                onPress={() => {navigation.navigate("HighlightInfo", {item: item})}}
            >
                <View>
                    <Text>{item.description}</Text>
                </View>
            </Tile>
        );
    };

    return (
        <FlatList
            data={HIGHLIGHTS}
            renderItem={renderHighlight}
            keyExtractor={item => item.id.toString()}
        />
    );
}
export default Highlights;