import React, { Component, } from 'react';
import { StackNavigator } from 'react-navigation';
import MainPage from './Comps/MainPage'
import GoogleMap from './Comps/GoogleMap'

const DrifterApp = StackNavigator({
    First: {
        screen: MainPage,
        navigationOptions: {
        title: null,
        header: null,
        }
    },
    Second: {
        screen: GoogleMap,
        navigationOptions: {
        title: null,
        header: null,
        }
    }
});

export default DrifterApp;
