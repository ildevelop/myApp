import * as actionTypes from "./../reducers/constant";
import axios from 'axios';
import mockData from './users.json'

export function getdata() {
    return async(dispatch)=>{
      let resMessage = await axios.get('https://s3.amazonaws.com/devops-infra/public/MOCK_DATA.json')
      if(resMessage){
        console.log('RESMESS',resMessage);
        return dispatch({
            type: actionTypes.ADD_DATA,
            payload:resMessage.data
          })
      }else{
        return dispatch({
            type: actionTypes.ADD_DATA_ERROR,
          })
      }
    }
  }

export function loginUser(user) {
  return function (dispatch) {
    console.log('userMOCK',mockData);
    console.log('user',user);
    let checkUser = mockData.filter((item)=>{
      return item.user===user.user && item.pass==user.pass
    })
    console.log('checkUser',checkUser);
    if(checkUser.length>0){
      console.log("YES");
      // localStorage.setItem('user', JSON.stringify({'pass': user.pass, 'user': user.user}));
      return dispatch({
        type: actionTypes.SET_USER,
        payload: user
      })
    }else{
      console.log("NOT");
      return dispatch({
        type: actionTypes.ERROR_LOGIN,
      })
    }
  }
}
  
export function signout() {
    localStorage.removeItem('user');
    return function (dispatch) {
      return dispatch({
        type: actionTypes.SIGNOUT,
      })
    }
  }