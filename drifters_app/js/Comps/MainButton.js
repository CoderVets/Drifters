//Button for bringing in a Map of somthing.

import React, { Component } from 'react';
import { Alert, AppRegistry, Platform, StyleSheet, Text,
  TouchableOpacity, View } from 'react-native';

export default class MainButton extends Component {
  _onPressButton() {
    Alert.alert('This should go to a map.')
  }

  render() {
    return (
      <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Enter</Text>
          </View>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 30,
    alignItems: 'center',
    backgroundColor: '#95A5A6'
    //flex: 1,
    //flexDirection: 'column',
    //justifyContent: 'center',
    //alignItems: 'center'
  },
  buttonText: {
    padding: 20,
    color: 'white',
    fontSize: 30
  }
})

