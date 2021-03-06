import React, { Component } from 'react';
import { EXHIBITS } from '../shared/exhibits';
import { Button, FlatList, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

class Exhibits extends Component {
    constructor(props) {
        super(props);

        this.state = {
            exhibits: EXHIBITS,
            navigation: props.navigation
        };
    }

    render() {
        
        const renderExhibitItem = ({item}) => {
            console.log('string item: ', item);
            return (
                <ListItem.Content style={styles.container}>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.overview}</ListItem.Subtitle>
                    <Button title="Visit this section" onPress={() => this.state.navigation.navigate("ExhibitInfo", {item: item})}></Button>
                </ListItem.Content>
            );
        };

        console.log(this.state.exhibits);
        return (
            <FlatList
                data={this.state.exhibits}
                renderItem={renderExhibitItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30
    }
});
export default Exhibits;