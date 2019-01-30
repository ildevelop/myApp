import React, {Component} from 'react';
import { View} from 'react-native';
import GreetingScreen from '../../components/GreetingScreen/GreetingScreen';
import SplashScreen from 'react-native-splash-screen'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as mainActions from "../../actions/mainActions";
class Greeting extends Component{
    componentDidMount(){
      setTimeout(()=>{
      SplashScreen.hide();
      },2000);
      setTimeout(()=>{
        this.props.navigation.navigate('Main');
      },4000)
    }
    render(){
      return(
        <View>
          <GreetingScreen username={this.props.name}/>
        </View>
        )
    }
}
const mapStateToProps = state => ({
    logdin:state.userReducer.logdin,
    name:state.userReducer.name
});
function mapDispatchToProps(dispatch) {
    return {...bindActionCreators(mainActions, dispatch)}
};
  
export default connect(mapStateToProps,mapDispatchToProps)(Greeting);
