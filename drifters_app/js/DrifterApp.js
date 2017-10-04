import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export class DrifterApp extends React.Component{
    render() {
        return(
            <View style={styles.container}>
                <Text>Hello world! Drifters test.</Text>
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
});

module.exports = DrifterApp;