import React, { Component, } from 'react';
import {StyleSheet, View, Text, Image, Button, TouchableOpacity} from 'react-native';
import FindMe from './FindMe'
import LatLong from './LatLong'
import Header from './Header'
import GoogleMap from './GoogleMap'
import { StackNavigator } from 'react-navigation'
import { NavigationActions } from 'react-navigation'

export default class MainPage extends Component {
    render() {         
        const { navigate } = this.props.navigation;
        return (          
            <View style={styles.container}>
                <Header headerText={'Drifters App'}/>    
                <FindMe/>
                <LatLong/>
                <TouchableOpacity onPress={() => navigate('Second')}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Enter</Text>
                    </View>
                </TouchableOpacity>


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
  button: {
    borderRadius: 50,
    marginTop: 200,
    marginBottom: 10,
    alignItems: 'center',
    backgroundColor: '#95A5A6',
    
   flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center'
    
    
  },
  buttonText: {
    padding: 20,
    color: 'white',
    fontSize: 30
  }
}
);