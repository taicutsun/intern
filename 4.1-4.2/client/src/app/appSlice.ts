import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

//interface and state
export interface CheckUserPass {
  username: string,
  password: string,
  secPass: string
}


export interface UserState {
  username: string,
  password: string,
  logged: boolean,
}

const initialState: UserState = {
  username: "admin",
  password: "1234",
  logged:false,
};

//interface and state

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    check(state, action: PayloadAction<UserState>) {//login
      if(state.password === action.payload.password && state.username === action.payload.username ) state.logged = true;
      
    },
  },
}); 

export const { check } = appSlice.actions;

export const selectLog = (state: RootState) => state.app.logged;//if logged
export const selectUserName = (state: RootState) => state.app.username;//users name
//export const selectUserPass = (state: RootState) => state.app.password;//users password

export default appSlice.reducer;
