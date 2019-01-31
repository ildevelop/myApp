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
    }
    onPressItem = (item) => {
        this.props.props.navigation.navigate('Detail',{item});
    };
    render(){
        let items = this.props.data;
        const textItems =items?items.map((item)=><Item key={item.id} item={item} onPressItem={this.onPressItem}/>):<Text>Loading ...</Text>
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
