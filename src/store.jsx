import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authenticationSlice";
import listingsReduce from "./components/addNew/creatSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,  
    listings: listingsReduce
},
});