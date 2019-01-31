import React from 'react';
import {Text,Image} from 'react-native';
import Crad from '../Card/Card'
import CardItem from '../Card/CardItem';
const ItemDetails =(props)=>{
    let params = props.navigation.state.params
      console.log('Detail::::>>',props)
      return(
        <Crad >
            <CardItem>
                <Image style={{width: 50, height: 50}}
                    source={{uri:params.item.avatar}}/>
                <Text>{params.item.property_name}</Text>
                <Text>{params.item.rating}</Text>
                <Text>{params.item.location}</Text>
                <Text>{params.item.price}</Text>
            </CardItem>
    </Crad>
    )
}
export default ItemDetails