import React, { Component, } from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import FindMe from './Comps/FindMe'
import Lat from './Comps/Lat'
import Long from './Comps/Long'
import Header from './Comps/Header'

export class DrifterApp extends React.Component{
    render() {
        return(
          
            <View style={styles.container}>
                <Header headerText={'Drifters'}/>    
                <FindMe/>
                <Lat />
                <Long />


               
            </View>
        );
    }
        
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: '#3482CB',
  },
  message: {
    textAlign: 'auto'
  },
}
);

module.exports = DrifterApp;