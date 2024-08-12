import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: null,
  error: null,
  patient: null,
};

const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState: initialState,
  
  reducers: {
    SetPatient: (state, action) => {
      state.patient = action.payload;
    },
  },
});
export const { SetPatient } = AuthSlice.actions;
export default AuthSlice.reducer;
