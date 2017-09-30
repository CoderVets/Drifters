import React from 'react';

import { StyleSheet, Text, View, Image } from 'react-native';
import ProfileButton from './Comps/button1.js';
export default class App extends React.Component {
  render() {
    return (
      <Image source={require('./Img/Img2.jpg')} style={styles.container}>
      
      <View style={styles.container}>
        
  <ProfileButton/>
      </View>
      </Image>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: null,
    height: null,
  },
  
});
