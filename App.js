
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Header from './src/components/Header/Header';
import Login from './src/components/Login/Login';
import ListItems from './src/components/ListItems/ListItems';
import {Provider} from 'react-redux'
import store from './src/reducers/index'
import SplashScreen from 'react-native-splash-screen'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

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
        <View>
          <Login/>
          {/* <Header title={ this.state.headerText}/>
          <ListItems/> */}
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
 
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
