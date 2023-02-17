import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  EstateCreated: false,
  listings: [],
};

export const listSlice = createSlice({
  name: "b",
  initialState,
  reducers: {
    list: (state) => {
      state.EstateCreated = true;
    },
    getListings: (state, action) => {
      state.listings = action.payload
    }
  },
});

export const createList = (data) => (dispatch) => {
  const token = localStorage.getItem("token")
  console.log(token)
  axios({
    method: "POST",
    url: "https://blogapi-0jru.onrender.com/api/realEstates",
    data: data,
    headers: {
      Authorization: `Bearer ${token}`
    },
  }).then((res) => {
    dispatch(list());
    console.log('helloo')
  }).catch((err) => {
    console.log(err)
  });
};

export const getAllListings = () => (dispatch) => {
  axios({
    method: "GET",
    url: "https://blogapi-0jru.onrender.com/api/realEstates",
  }).then((response)=>{
    console.log(response)
    dispatch(getListings(response.data))
  }).then((err)=> {
    console.log(err)
  })
}

export const { list, getListings } = listSlice.actions;
export default listSlice.reducer;