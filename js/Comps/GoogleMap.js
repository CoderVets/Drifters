import React, { Component } from 'react';
import { WebView, View } from 'react-native';
import Header from './Header'

export default class GoogleMap extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        //justifyContent: 'space-between',
      }}>
      <Header headerText={'Drift Plot'}/>
      <WebView
          source={{uri: 'http://www.worldatlas.com/img/locator/city/032/4132-guantanamo-locator-map.jpg'}}
          //style={{marginTop: 20}}    
      />
      </View>
    );    
  }
}

