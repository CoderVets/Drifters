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
    
    
    borderRadius: 50,
    marginTop: 200,
    marginBottom: 10,
    alignItems: 'center',
    backgroundColor: '#95A5A6',
    
   flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center'
    
    
  },
  buttonText: {
    padding: 20,
    color: 'white',
    fontSize: 30
  }
});