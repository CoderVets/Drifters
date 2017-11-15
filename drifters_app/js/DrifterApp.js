import React, { Component, } from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import FindMe from './Comps/FindMe'
import Lat from './Comps/Lat'
import Long from './Comps/Long'


export class DrifterApp extends React.Component{
    render() {
        return(
            <View style={styles.container}>

            <Image source={require('./Img/Waterpkm.jpg')}
                  style={styles.backgroundImage}>


                
                <FindMe/>
                <Lat />
                <Long />


             </Image>   
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