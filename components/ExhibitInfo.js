import React, { Component } from 'react';
import { ScrollView, Text, Image, StyleSheet } from "react-native";

function ExhibitInfo(props) {

    const item = props.route.params.item;
    
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{item.name}</Text>

            <Image
                source={item.image1}
                style={{flex: 1, width: 200, height: 200}}
            />

            <Text style={styles.exhibitText}>{item.text1}</Text>

            <Image
                source={item.image2}
                style={{flex: 1, width: 200, height: 200}}
            />

            <Text style={styles.exhibitText}>{item.text2}</Text>

            <Image
                source={item.image3}
                style={{flex: 1, width: 200, height: 200}}
            />

            <Text style={styles.exhibitText}>{item.text3}</Text>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30
    },
    exhibitText: {
        margin: 10
    },
    title: {
        textAlign: 'center',
        fontSize: 30
    }
});

export default ExhibitInfo;