import * as actionTypes from "./constant";

const initialState = {
  logdin: false,
  password: null,
  email: null,
  errorMessage:null,
  data:null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
    return {...state, logdin: true, password: action.payload.password, email: action.payload.email};
    case actionTypes.SIGNOUT:
      return {...state, logdin: false, password: null, email: null};
    case actionTypes.ADD_DATA_ERROR:
      return {...state, errorMessage: "Error get data from server"};
    case actionTypes.ADD_DATA:
      return {...state, data:action.payload};
    case actionTypes.ERROR_LOGIN:
      return {...state, logdin: false, errorMessage: "Error Login"};
    default:
      return state
  }
};
export default userReducer