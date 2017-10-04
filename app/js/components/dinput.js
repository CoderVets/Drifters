import React, { Component } from 'react';
import { AppRegistry, TextInput, Dimensions } from 'react-native';

export class DInput extends Component {
    render() {
      return (
        <TextInput
          style={{height: 40, width:Dimensions.get('window').width - 50}}
          placeholder = {this.props.placeholder} 
        />
      );
    }
  }

module.exports = DInput;