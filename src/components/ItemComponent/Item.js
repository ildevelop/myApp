import React from 'react';
import {Image, Text,TouchableOpacity} from 'react-native';
import Crad from '../Card/Card'
import CardItem from '../Card/CardItem';
const Item = (props)=>{
    return(
        <Crad >
            <TouchableOpacity  onPress={()=>props.onPressItem(props.item)}>
                <CardItem>
                    <Image style={{width: 50, height: 50}}
                        source={{uri:props.item.avatar}}/>
                    <Text>{props.item.property_name}</Text>
                    <Text>{props.item.price}</Text>
                </CardItem>
            </TouchableOpacity>      
        </Crad>
    )
}


export default Item