import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "./components/HomeComponent";
import Contact from "./components/ContactComponent";
import Highlights from "./components/HighlightsComponent";
import Item from "./components/ItemComponent";

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

const ContactStackNavigator = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  )
}

const HighlightsStackNavigator = () => {
  return(
    <Stack.Navigator initialRouteName="Highlights">
      <Stack.Screen name="Highlights" component={Highlights} />
      <Stack.Screen name="Item" component={Item} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackNavigator} />
        <Drawer.Screen name="Contact" component={ContactStackNavigator} />
        <Drawer.Screen name="Highlights" component={HighlightsStackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
