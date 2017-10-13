import React, { Component, } from 'react';
import {StyleSheet, View, Text} from 'react-native';

import FindMe from './Comps/FindMe'

export class DrifterApp extends React.Component{
    render() {
        return(
            <View style={styles.container}>
                <FindMe style={styles.message}/>
                <Text style={styles.message}>Hello world! Drifters test.</Text>
                
            </View>
        );
    }
        
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    textAlign: 'auto'
  }
});

module.exports = DrifterApp;