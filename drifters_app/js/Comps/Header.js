import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>    
            <Text style={textStyle}>{props.headerText}</Text>
        </View>    
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#95A5A6',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2
    },
    textStyle: {
        fontSize: 30
    },
};

export default Header;