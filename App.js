
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Header from './src/components/Header/Header';
import Login from './src/components/Login/Login';
import ListItems from './src/components/ListItems/ListItems';
import {Provider} from 'react-redux'
import store from './src/reducers/index'
import SplashScreen from 'react-native-splash-screen'
import {createStackNavigator, createAppContainer,createDrawerNavigator,createSwitchNavigator} from 'react-navigation'

export default class App extends Component{
  state={
    headerText:'Albums',
    items:[{name:'ilya'},{name:'tanya'}]
  }
  componentDidMount(){
    SplashScreen.hide()
  }
  render() {
    console.log('Hello');
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  } 
}

class Home extends Component{
  componentDidMount(){
    console.log('componentDidMount')
    setTimeout(()=>{
    SplashScreen.hide();
    },2000)
  }
  render(){
    return(
        <View>
          {/* <Login/> */}
          <Header title={ "headerText"}/>
          <ListItems/>
        </View>
    )
  }
}
const AppDrawerNavigation = createDrawerNavigator({
  Home:{screen:Home}
})


const AppStackNavigator = createSwitchNavigator({
  Login:{screen:Login},
  Home:{screen:AppDrawerNavigation}
})

const AppContainer = createAppContainer(AppStackNavigator)