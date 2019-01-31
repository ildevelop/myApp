import React, {Component} from 'react';
import Login from './src/Screens/Login/Login';
import Greeting from './src/Screens/Home/Greeting';
import Main from './src/Screens/Home/Main';
import ItemDetails from './src/components/ItemComponent/ItemDetails';
import {Provider} from 'react-redux'
import store from './src/reducers/index'
import SplashScreen from 'react-native-splash-screen'
import {createAppContainer,createDrawerNavigator,createSwitchNavigator,createStackNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

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

const signOutNavigator =createSwitchNavigator({
  Login:{screen:Login},
})
const myHomeDraerNavigator= createDrawerNavigator({
  Main:{screen:Main},
  SignOut:signOutNavigator,
},{
  navigationOptions:({navigation})=>{
  return({
    headerTitle:'Feed',
    headerLeft:(  <Icon style={{paddingLeft:10}} onPress={()=>navigation.openDrawer()} name={'ios-menu'} size={30} color={'#000'}/>)
  })
}
})
const AppDrawerNavigation = createStackNavigator({
  Main:myHomeDraerNavigator,
  Detail:{screen:ItemDetails}
}
,{
  defaultNavigationOptions:({navigation})=>{
    return(
    {
    headerStyle:{
      backgroundColor:"#8b54ae"
    },
    headerTitle:"Main",
    headerLeft:(
      <Icon style={{paddingLeft:10}} onPress={()=>navigation.openDrawer()} name={'ios-menu'} size={30} color={'#000'}/>
    )
  })}
})
const AppGreetingDrawerNavigation = createDrawerNavigator({
  Greeting:{screen:Greeting}
})
const AppStackNavigator = createSwitchNavigator({
  Login:{screen:Login},
  Greeting:{screen:AppGreetingDrawerNavigation},
  AppDrawerNavigation
})

const AppContainer = createAppContainer(AppStackNavigator)