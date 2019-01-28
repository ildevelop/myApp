import React from 'react';
import { View} from 'react-native';

const CardItem = (props)=>{
    return(
        <View style={styles.containerStyle}>
        {props.children} 
        </View>
    )
}
const styles={
    containerStyle:{
         borderBottomWidth:1,
         padding:5,
         backgroundColor:'#fff',
         borderColor:'#ddd',
         display:'flex',
         alignItems:"center",
         justifyContent:'space-between',
         flexDirection:'row',
         position:'relative'
         
    }
}

export default CardItem