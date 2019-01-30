import React from 'react';
import { Text, View,Animated,Dimensions} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import loader from '../../../images/loader.svg'
const {width,height}= Dimensions.get('window')
const GreetingScreen = (props)=>{
    const {mainGreeting,animView}= styles;
    const myAnimation = new Animated.Value(0);
    Animated.timing(myAnimation,{
        toValue:1,
        duration:2000
    }).start();
    const translateY = myAnimation.interpolate({
        inputRange:[0,1],
        outputRange:[-(height*2),0]
    })
    const translateX = myAnimation.interpolate({
        inputRange:[0,1],
        outputRange:[-(height*2),0]
    })
    return(
        <View style={mainGreeting}>
            <Animated.View style={[animView,{transform:[{translateX},{translateY}]}]}>
            <Text>Hi {props.username}</Text>
            <Text>enjoy our servise!</Text>
               <SvgUri
                width="100"
                height="100"
                source={loader}
                />
            </Animated.View>
         
        </View>
    )
}
const styles={
    mainGreeting:{
        width: '100%',
        height: '100%',
        justifyContent:'center',
        alignItems:'center'
     },
     animView:{
         backgroundColor:'yellow',
         width,
         height,
         justifyContent:'center',
         alignItems:'center'
     }
}

export default GreetingScreen