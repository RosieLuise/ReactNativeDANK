import React from 'react';
import {Button, View, Text} from "react-native";
import {Card} from "react-native-elements"

function Home(props) {
    return(
        <View>
            <Card   
                featuredTitle="Home title"
                image={{uri: "../assets/favicon.png"}}
            >
                <Text style={{margin: 10}}>This is the home component</Text>
            </Card>
            <Button
                title="Go to Contact"
                onPress={() => props.navigation.navigate("Contact")}
            />
        </View>
    )
}
export default Home;