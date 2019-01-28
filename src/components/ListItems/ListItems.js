import React, {Component} from 'react';
import {Text, View,ScrollView ,Image} from 'react-native';
import axios from 'axios'
import Item from '../ItemComponent/Item'
class ListItems extends Component{
    state={
        data:null
    }
    componentWillMount(){
        axios.get('https://s3.amazonaws.com/devops-infra/public/MOCK_DATA.json').then(response=>{
            console.log('response',response.data)
            this.setState({data:response.data})
        })
    }
    onPressItem = (item) => {
        console.log('Press on :',item)
      }
    render(){
        let items = this.state.data;
        const textItems =items?items.map((item)=><Item key={item.id} item={item} onPressItem={this.onPressItem}/>):null
        
        // <View key={item.id} >
        //         <Image style={{width: 50, height: 50}}
        //             source={{uri:item.avatar}}/>
        //         <Text>{item.property_name}</Text>
        //         <Text>{item.price}</Text>
        //     </View >):null
        return(
            <ScrollView  >
              <Text>Hello</Text>
              {textItems}
              <Text>End of Listings</Text>

            </ScrollView >
        )
    }
}

export default ListItems