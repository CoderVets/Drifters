import React, { Component } from 'react';
import { AppRegistry, Button } from 'react-native';

export class DButton extends Component {
    render() {
      return (
        <Button
            onPress={this.props.action}
            title= {this.props.title}
            color= {this.props.color}
            accessibilityLabel={this.props.accessibilityLabel}
            disabled = {this.props.disabled ? true : false}
        />
      );
    }
  }

module.exports = DButton;