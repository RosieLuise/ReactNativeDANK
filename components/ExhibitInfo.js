import React, { Component } from 'react';
import { View, Text, StyleSheet } from "react-native";

function ExhibitInfo(props) {
    
    return (
        <View>
            <Text>{item.name}</Text>
            {/* {props.item.image1}} */}
            {/* <Text>{props.item.text1}</Text>
            {props.item.image2}
            <Text>{props.item.text2}</Text>
            {props.item.image3}
            <Text>{props.item.text3}</Text> */}
        </View>
    );
}

export default ExhibitInfo;