import React from 'react';
import {Button, View, Text, FlatList} from "react-native";
import {Card, ListItem} from "react-native-elements"
import HIGHLIGHTS from "../shared/highlights";

function Highlights() {
    const renderHighlight = (item) => {
        return (
            <ListItem
                onPress={() => {}}
                title={item.name}
            />
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