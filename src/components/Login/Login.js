import React , {Component}from 'react';
import { ImageBackground,Text,View,TextInput,Dimensions,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import bgImg from './../../../images/loginBG.jpg';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as mainActions from "../../actions/mainActions";
const {width:WIDTH} = Dimensions.get('window');

class Login extends Component{
    state={
        username:null,
        password:null,
        showPass:false
    }
    handleShowPass = ()=>{
        console.log('handleShowPass');
        this.setState({showPass:!this.state.showPass});
    }
    handleLogin=()=>{
        let user = this.state.username;
        let pass = this.state.password;
        if(pass&&user){
            this.props.loginUser({user,pass})
        }
    }
    render(){
    const {mainLogin,inpitStyle,inputIcon,inputIconEye,textBtn,btnLogin,errorText}= styles;
    return(
        <ImageBackground source={bgImg} style={mainLogin}>
            <View>
                <Text style={{fontWeight:"700"}}>L O G I N</Text>
            </View>
            <View>
                <Icon style={inputIcon} name={'ios-person'} size={30} color={'#0003'}/>
                <TextInput
                    onChangeText={(username) => this.setState({username})}
                    style={inpitStyle}
                    placeholder={'username'}
                    placeholderTextColor={'#000'}
                    underlineColorAndroid='transparent'
                />
            </View>
            <View>
                <Icon style={inputIcon} name ={'ios-lock'} size={30} color={'#0003'}/>
                <TextInput
                    onChangeText={(password) => this.setState({password})}
                    style={inpitStyle}
                    placeholder={'password'}
                    secureTextEntry={!this.state.showPass}
                    placeholderTextColor={'#000'}
                    underlineColorAndroid='transparent'
                />
                <TouchableOpacity style={inputIconEye} onPress={()=>this.handleShowPass()}>
                    <Icon name={this.state.showPass?'ios-eye-off':'ios-eye'} size={30} color={'#0003'}/>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={btnLogin} onPress={()=>this.handleLogin()}>
                <Text style={textBtn}>Login</Text>
            </TouchableOpacity>
             <View style={this.props.errorMessage?errorText:null}>            
                 <Text style={textBtn}>{this.props.errorMessage}</Text>
            </View>
            
      </ImageBackground>
    )}
}

function mapDispatchToProps(dispatch) {
    return {...bindActionCreators(mainActions, dispatch)}
};
const mapStateToProps = state => ({
    errorMessage:state.userReducer.errorMessage,
    
  });
export default connect(mapStateToProps,mapDispatchToProps)(Login);

const styles={
 mainLogin:{
    width: '100%',
    height: '100%',
    justifyContent:'center',
    alignItems:'center'
 },
 inpitStyle:{
    width:WIDTH - 55,
    height:45,
    borderRadius:25,
    fontSize:16,
    paddingLeft:45,
    backgroundColor:'#0003',
    color:'#000',
    marginHorizontal:25,
    marginTop:10
 },
 inputIcon:{
     position:'absolute',
     left:37,
     top:18
 },
 inputIconEye:{
    position:'absolute',
    right:37,
    top:18
 },
 btnLogin:{
    width:WIDTH - 55,
    height:45,
    borderRadius:25,
    backgroundColor:'#02caded9',
    justifyContent:'center',
    marginTop:10
 },
 textBtn:{
    color:'#000',
    fontSize:16,
    textAlign:'center'
 },
 errorText:{
    marginTop:10,
    width:WIDTH/2,
    height:45,
    borderRadius:25,
    fontSize:16,
    borderWidth: 1,
    backgroundColor:'#dc293a',
    borderColor: '#fff',
    justifyContent:'center',
 }
}