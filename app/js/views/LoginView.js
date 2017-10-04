import React, {Component} from 'react';
import {StyleSheet, View } from 'react-native';
import DButton from '../components/dbutton';
import DInput from '../components/dinput'

var action1 = function (){
        return "";
    };
export class LoginView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <DInput placeholder="Username" />
                <DInput placeholder="Password" />
                <DButton action = {action1} title = 'Enter' color= "#0ff" accessibilityLabel="Enter app" disabled = {false} />
            </View>
        );

    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

module.exports = LoginView;