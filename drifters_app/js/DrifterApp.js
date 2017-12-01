import React, { Component, } from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import FindMe from './Comps/FindMe'
import LatLong from './Comps/LatLong'

import Header from './Comps/Header'

export class DrifterApp extends React.Component{
    render() {
        return(
          
            <View style={styles.container}>
                <Header headerText={'Drifters Rock'}/>    
                <FindMe/>
                <LatLong/>
                






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