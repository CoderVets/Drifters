import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class GoogleMap extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'http://www.worldatlas.com/img/locator/city/032/4132-guantanamo-locator-map.jpg'}}
        style={{marginTop: 20}}
      />
    );
  }
}