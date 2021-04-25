import React, { Component } from 'react';
import { EXHIBITS } from '../shared/exhibits';
import { FlatList } from 'react-native';
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
                <ListItem>
                    {/* // title={item.name}
                    // image1={item.image1}
                    // onPress={() => this.state.navigation.navigate("ExhibitInfo", {item})} */}
                    <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem>
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

export default Exhibits;