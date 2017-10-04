/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import DrifterApp from './js/DrifterApp';

export default class drifters_app extends Component {
  render() {
    return (
      <DrifterApp/>
    );
  }
}



AppRegistry.registerComponent('drifters_app', () => drifters_app);
