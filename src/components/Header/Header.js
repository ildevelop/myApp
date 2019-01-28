import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const Header = (props)=>{
    const {viewStyle,headerText}= styles;
    return(
        <View style={viewStyle}>
            <Text style={headerText}>Hello {props.title}</Text>
        </View>
    )
}
const styles={
    viewStyle:{
        backgroundColor:'#eee',
        justifyContent:'center',
        alignItems:'center',
        heigth:60,
        paddingTop:15,
        paddingBottom:5,
        shaddowColor:'#000',
        shadowOffset:{width:0,heigth:2},
        shadowOpacity:0.2,
        elevation:2,
        position:'relative'
    },
    headerText:{
        fontSize:20
    }
}

export default Header