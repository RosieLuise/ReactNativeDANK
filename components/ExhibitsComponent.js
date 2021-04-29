import React, { Component } from 'react';
import { EXHIBITS } from '../shared/exhibits';
import { Button, FlatList } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

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

                    {/* title={item.name}
                    onPress={() => this.state.navigation.navigate("ExhibitInfo", {item})} */}

                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.overview}</ListItem.Subtitle>
                    <Button title="Visit this section" onPress={() => props.navigation.navigate("exhibitInfo")}></Button>
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
        flex: 1
    }
});

export default Exhibits;