import React from 'react';
import {View, Text, Image} from "react-native";
import {Card} from "react-native-elements"

function Home(props) {
    return(
        <View>
            <Card   
                featuredTitle="Home title"
                containerStyle={{padding: 10, alignContent: "center", justifyContent: "center"}}
            >
                <Card.Title>Willkommen!</Card.Title>
                
                <Image 
                    source={require("../assets/images/germania-wall.jpg")}
                    style={{width: "100%", height: 200}}
                />
                <Text style={{margin: 10}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et quam tellus. Nulla vel risus nec lorem bibendum elementum. Praesent fringilla nibh eget ornare egestas. Pellentesque vitae leo ornare velit molestie ullamcorper. Praesent non quam eleifend, finibus mauris id, vehicula lorem. Aenean dolor elit, vulputate sit amet nunc vitae, luctus pharetra sapien. Phasellus sit amet tortor justo. Sed enim elit, rhoncus eu semper ornare, iaculis at nisl. In ultricies velit volutpat lacus commodo suscipit. Ut iaculis in lacus et fermentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</Text>
            </Card>
            
        </View>
    )
}
export default Home;