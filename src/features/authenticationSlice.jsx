import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoggedIn: false,
  token: "",
  userData: {},
  error: "",
  loginSuccess: "User Logged successfully",

};

export const authSlice = createSlice({
  name: "a",
  initialState,
  reducers: {
    register:(state) =>{
      state.userCreated =true;
    },
    login: (state, action) => {
      state.userData = action.payload;
      state.isLoggedIn = true;
    },
    token: (state, action) => {
      state.token = action.payload;
    },
    loginError: (state, action) => {
      state.error = action.payload;
    },
    loginSuccess: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const loginUser = (data) => (dispatch) => {
  console.log(data)
  axios({
    method: "POST",
    url: "https://blogapi-0jru.onrender.com/api/users/login",
    data: data,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      accept: "application/json",
   
    },
  })


    .then((res) => {
      console.log(res.data);
      dispatch(token(res.data.token));
      localStorage.setItem("token", res.data.token);
      dispatch(login(res.data.data));
    })
    .catch((err) => {
      console.log(err)
      dispatch(loginError(err.response.data.message));
    });
};

export const createUser = (data) =>(dispatch) => {
  console.log(data)
  axios ({
    method: "POST",
    url: "https://blogapi-0jru.onrender.com/api/users",
    data: data,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      accept: "application/json",
    },
  }).then((res) =>{
    dispatch(register())
  })
  
  
};

export const { login, token, loginError ,register } = authSlice.actions;
export default authSlice.reducer;