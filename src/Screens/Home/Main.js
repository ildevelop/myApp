import React from 'react';
import {View} from 'react-native';
import Header from '../../components/Header/Header';
import ListItems from '../../components/ListItems/ListItems';
const Main = ()=>{
    return(
        <View>
            <Header title={"Main"}/>
            <ListItems/>
      </View>
    )
}
export default Main