import React, { Component } from 'react';
import { View, Text, Image } from "react-native";

function ExhibitInfo(props) {

    const item = props.route.params.item;
    
    return (
        <View>
            <Text>{item.name}</Text>

            <Image>
                {item.image1}
            </Image>

            <Text>{item.text1}</Text>


            
{/* 
            <View>
                {item.image1}
            </View>

            <Text>{item.text2}</Text>

            <View>
                {item.image1}
            </View>
            
            <Text>{item.text3}</Text> */}
        </View>
    );
}

export default ExhibitInfo;