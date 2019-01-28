import React, {Component} from 'react';
import {Text, View,ScrollView ,Image} from 'react-native';
import axios from 'axios'
class ListItems extends Component{
    state={
        data:null
    }
    componentWillMount(){
        axios.get('https://s3.amazonaws.com/devops-infra/public/MOCK_DATA.json').then(response=>{
            console.log('response',response)
            this.setState({data:response.data})
        })
    }
    render(){
        console.log('items',this.props.items)
        let items = this.state.data;
        
        const textItems =items?items.map((item)=><View key={item.id} >
                <Image style={{width: 50, height: 50}}
                    source={{uri:item.avatar}}/>
                <Text>{item.property_name}</Text>
                <Text>{item.price}</Text>
            </View >):null
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