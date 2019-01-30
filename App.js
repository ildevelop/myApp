
import React, {Component} from 'react';
import Login from './src/Screens/Login/Login';
import Greeting from './src/Screens/Home/Greeting';
import Main from './src/Screens/Home/Main';
import {Provider} from 'react-redux'
import store from './src/reducers/index'
import SplashScreen from 'react-native-splash-screen'
import {createAppContainer,createDrawerNavigator,createSwitchNavigator} from 'react-navigation'

export default class App extends Component{

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

const AppDrawerNavigation = createDrawerNavigator({
  Main:{screen:Main}
})
const AppGreetingDrawerNavigation = createDrawerNavigator({
  Greeting:{screen:Greeting}
})
const AppStackNavigator = createSwitchNavigator({
  Login:{screen:Login},
  Greeting:{screen:AppGreetingDrawerNavigation},
  Main:{screen:AppDrawerNavigation}
})

const AppContainer = createAppContainer(AppStackNavigator)