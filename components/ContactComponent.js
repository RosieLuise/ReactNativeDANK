import React, {Component} from 'react';
import { Text, View, ScrollView, StyleSheet, Picker, Switch, Button, Modal, Alert } from 'react-native';
import {Card, Input, Icon} from "react-native-elements";


class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            comments: ""
        }
    }

    handleSubmit() {
        Alert.alert("Result", `
        Name: ${this.state.name}\n
        Email: ${this.state.email}\n
        Comment: ${this.state.comments}`);
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
                            leftIcon={{name: "user-o", type: "font-awesome"}}
                            leftIconContainerStyle={{paddingRight: 10}}
                            onChangeText={name => this.setState({name: name})}
                        />
                        <Input 
                            placeholder="Email"
                            leftIcon={{name: "envelope", type: "font-awesome"}}
                            leftIconContainerStyle={{paddingRight: 10}}
                            onChangeText={email => this.setState({email: email})}
                        />
                        <Input 
                            placeholder="Comments"
                            multiline
                            numberOfLines={4}
                            style={{textAlignVertical:"top"}}
                            onChangeText={comments => this.setState({comments: comments})}
                        />
                        <Button 
                            title="submit" 
                            onPress={() => this.handleSubmit()}
                        />
                    </Card>
                </View>
            </ScrollView>
        )
    }
}
export default Contact;