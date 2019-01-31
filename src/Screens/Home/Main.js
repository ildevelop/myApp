import React from 'react';
import {View} from 'react-native';
import ListItems from '../../components/ListItems/ListItems';
const Main = (props)=>{
    return(
        <View>
            <ListItems props={props}/>
      </View>
    )
}
export default Main