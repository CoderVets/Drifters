import React, { Component } from 'react';
import { AppRegistry, TextInput } from 'react-native';

export default class Lat extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Lat' };
  }

  render() {
    return (
      <TextInput
      placeholder = 'Lat'
       keyboardType = 'numeric'
          onChangeText = {(text)=> this.onChanged(text)}
          value = {this.state.myNumber}
        style={{height: 30,
          width:250, 
          borderColor: 'blue', 
          borderWidth: 5,
          textAlign:'center',
          justifyContent: 'center',
          }}
        onChangeText={(text) => this.setState({myNumber: text})}
        
      />
    );
  }
}
