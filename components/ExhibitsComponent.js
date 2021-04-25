import React, { Component } from 'react';
import { EXHIBITS } from './shared/exhibits'

class Exhibits extends Component {
    constructor(props) {
        super(props);

        this.state = {
            exhibits: EXHIBITS
        };
    }

    render() {
        
        const renderExhibit = ({item}) => {
            return (
                <ListItem
                    onPress={() => }
                    title={item.name}
                    text1={item.text1}
                    image1={item.image1}
                    text2={item.text2}
                    image2={item.image2}
                    text3={item.text3}
                    image3={item.image3}
                />
            );
        };

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