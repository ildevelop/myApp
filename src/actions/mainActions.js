import * as actionTypes from "./../reducers/constant";
import axios from 'axios'


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
    return function async (dispatch) {
      return VoteApi.login(user).then((res) => {
        let body = res.data;
        let newUser = {email:user.user.email};
        if (body.status === "approved" && body !== null) {
          localStorage.setItem('user', JSON.stringify({'token': body.token, 'user': user.user.email}));
          newUser.userToken = body.token;
          return dispatch({
            type: actionTypes.SET_USER,
            payload: newUser
          })
        } else {
          return dispatch({
            type: actionTypes.ERROR_LOGIN,
          })
        }
  
      }).catch(function (error) {
        console.log('ERR here:', error);
        return dispatch({
          type: actionTypes.ERROR_LOGIN,
        })
      })
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