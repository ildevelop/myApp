import React, {Component} from 'react';
import {Text, View,ScrollView ,Image} from 'react-native';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as mainActions from "../../actions/mainActions";
import Item from '../ItemComponent/Item'
class ListItems extends Component{
    state={
        loading:false,
    }
    componentWillMount(){
        this.setState({loading:!this.state.loading});
        this.props.getdata();
    }
    onPressItem = (item) => {
        console.log('Press on :',item)
    };
    render(){
        let items = this.props.data;
        console.log('items',items)
        const textItems =items?items.map((item)=><Item key={item.id} item={item} onPressItem={this.onPressItem}/>):<Text>Loading ...</Text>
        
        // <View key={item.id} >
        //         <Image style={{width: 50, height: 50}}
        //             source={{uri:item.avatar}}/>
        //         <Text>{item.property_name}</Text>
        //         <Text>{item.price}</Text>
        //     </View >):null
      
        return(
            <ScrollView  >
                  {textItems}
                  <Text>End of Listings</Text>
            </ScrollView >
        )   
    }
}

const mapStateToProps = state => ({
    data:state.userReducer.data,
    logdin:state.userReducer.logdin
  });
  function mapDispatchToProps(dispatch) {
    return {...bindActionCreators(mainActions, dispatch)}
  };
  
  export default connect(mapStateToProps,mapDispatchToProps)(ListItems);
