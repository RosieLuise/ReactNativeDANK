import React, {Component} from 'react';
import { Text, View, ScrollView, StyleSheet, Picker, Switch, Button, Modal, Alert } from 'react-native';
import {Card, Input, Icon} from "react-native-elements";


class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    
    render() {
        return(
            <ScrollView>
                <View>
                    <Card title="Contact Information" wrapperStyle={{margin: 20}}>
                        <Text>4740 N Western Ave</Text>
                        <Text>Chicago, IL 60625</Text>
                        <Text style={{marginBottom: 10}}>U.S.A.</Text>
                        <Text>Phone: (773) 561-9181</Text>
                    </Card>
                </View>
                <View>
                    <Card title="Contact Information" wrapperStyle={{margin: 20}}>
                        <Text>Have a question? Feel free to submit it below:</Text>
                        <Input 
                            placeholder="Name"
                        />
                        <Input 
                            placeholder="Email"
                        />
                        <Input 
                            placeholder="Comments"
                            multiline
                            numberOfLines={4}
                            style={{textAlignVertical:"top"}}
                        />
                        <Button title="submit" />
                    </Card>
                </View>
            </ScrollView>
        )
    }
}
export default Contact;