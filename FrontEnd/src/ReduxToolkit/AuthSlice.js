
import { createSlice } from "@reduxjs/toolkit";

const initialState ={
  loading:null,
  error:null,
  user:null
}

const AuthSlice = createSlice({
  initialState:initialState,
  name:"AuthSlice",
  
  reducers:{
    SetPatient:(state,action)=>{
      state.user = action.payload;
    },
    Logout:(state)=>{
      state.user=null,
      state.loading=null,
      state.error=null
    },

  },
})
export const {SetPatient , Logout} = AuthSlice.actions

export default AuthSlice.reducer
