import React, { Component, } from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import FindMe from './Comps/FindMe'
import Lat from './Comps/Lat'
import Long from './Comps/Long'


export class DrifterApp extends React.Component{
    render() {
        return(
            <View style={styles.container}>

            


                
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
    
   
  },
  message: {
    textAlign: 'auto'
  },

  backgroundImage: {
    flexGrow:1,
    height:null,
    width:null,
    alignItems: 'center',
    justifyContent:'center',
  },

});

module.exports = DrifterApp;